using Core.DTO;
using Core.Entities;
using Core.plugins;
using Core.RequestModel;
using Core.Service.NguoiDungService;
using Core.Service.TinBanService;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BDS.Apis
{
    [ApiController]
    [Route("ThanhToan")]
    public class ThanhToan : ControllerBase
    {
        private readonly ITinBanService _tinBanService = new TinBanService();
        private readonly INguoiDungService _nguoiDungService = new NguoiDungService();
        [HttpPost("taotin")]
        public async Task<IActionResult> TaoTinDang([FromForm] List<IFormFile> file, [FromForm] string data)
        {
            TaoTinKhachNgoai bh = JsonConvert.DeserializeObject<TaoTinKhachNgoai>(data);
            return Ok(await _tinBanService.DangTinBanKhachNgoai(bh, file));
        }
        [HttpPost("xacnhan")]
        public async Task<IActionResult> XacNhanNap([FromQuery] int hoaDonId, [FromQuery] int status)
        {
            return Ok(await _nguoiDungService.CheckThanhToan(hoaDonId, status));
        }
        [HttpPost("naptien")]
        public async Task<IActionResult> NapTien([FromQuery] long amount, [FromQuery] int nguoiDungId)
        {
            //Get Config Info
            HoaDonNapTien hoaDon = await _nguoiDungService.NapTien(amount, nguoiDungId);
            string vnp_Returnurl = "http://localhost:3000/checkout"; //URL nhan ket qua tra ve 
            string vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"; //URL thanh toan cua VNPAY 
            string vnp_TmnCode = "NX0E4Z3Y"; //Ma định danh merchant kết nối (Terminal Id)
            string vnp_HashSecret = "BUEOSSZUUHLMPYVUCKRIUFEJRRWZREHH"; //Secret Key



            //Build URL for VNPAY
            VnPayLibrary vnpay = new VnPayLibrary();

            vnpay.AddRequestData("vnp_Version", VnPayLibrary.VERSION);
            vnpay.AddRequestData("vnp_Command", "pay");
            vnpay.AddRequestData("vnp_TmnCode", vnp_TmnCode);
            vnpay.AddRequestData("vnp_Amount", (amount * 100).ToString());

            vnpay.AddRequestData("vnp_CreateDate", DateTime.Now.ToString("yyyyMMddHHmmss"));
            vnpay.AddRequestData("vnp_CurrCode", "VND");
            vnpay.AddRequestData("vnp_IpAddr", GetIpAddress(HttpContext));

            vnpay.AddRequestData("vnp_Locale", "vn");
            vnpay.AddRequestData("vnp_OrderInfo", "Thanh toan don hang:" + hoaDon.Id);
            vnpay.AddRequestData("vnp_OrderType", "other"); //default value: other

            vnpay.AddRequestData("vnp_ReturnUrl", vnp_Returnurl);
            vnpay.AddRequestData("vnp_TxnRef", hoaDon.Id.ToString()); // Mã tham chiếu của giao dịch tại hệ thống của merchant. Mã này là duy nhất dùng để phân biệt các đơn hàng gửi sang VNPAY. Không được trùng lặp trong ngày

            //Add Params of 2.1.0 Version
            //Billing

            string paymentUrl = vnpay.CreateRequestUrl(vnp_Url, vnp_HashSecret);

            return Ok(paymentUrl);
        }
        private static string GetIpAddress(HttpContext httpContext)
        {
            string ipAddress = httpContext.Connection.RemoteIpAddress.ToString();// bị cấm
            return ipAddress;
        }
    }
}
