using Core.DTO;
using Core.plugins;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BDS.Apis
{
    [ApiController]
    [Route("ThanhToan")]
    public class ThanhToan : ControllerBase
    {
        //[HttpPost("suabaihoc")]
        //public async Task<IActionResult> SuaBaiHoc([FromForm] List<IFormFile> file, [FromForm] string data)
        //{
        //    BaiHocDaoTaoDTO bh = JsonConvert.DeserializeObject<BaiHocDaoTaoDTO>(data);
        //    return Ok(await _daoTao.SuaBaiHoc(file[0], file[1], bh));
        //}
        [HttpPost("orderPayVn")]
        public async Task<IActionResult> orderPayVn(long amount)
        {
            //Get Config Info

            string vnp_Returnurl = "https://polyfood.store/vnpay_return"; //URL nhan ket qua tra ve 
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
            vnpay.AddRequestData("vnp_OrderInfo", "Thanh toan don hang:" + 123);
            vnpay.AddRequestData("vnp_OrderType", "other"); //default value: other

            vnpay.AddRequestData("vnp_ReturnUrl", vnp_Returnurl);
            vnpay.AddRequestData("vnp_TxnRef", "1"); // Mã tham chiếu của giao dịch tại hệ thống của merchant. Mã này là duy nhất dùng để phân biệt các đơn hàng gửi sang VNPAY. Không được trùng lặp trong ngày

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
