using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.Email
{
    public class EmailService : IEmaiService
    {
        public string FromEmail { get; set; }
        public string Password16 { get; set; }
        public string SmtpHost { get; set; }
        public int SmtpPort { get; set; }
        public EmailService()
        {
            FromEmail = "dotienanh305@gmail.com";
            Password16 = "tyqlmxxzqhebfibd";
            SmtpHost = "smtp.gmail.com";
            SmtpPort = 587;
        }
        public async Task SendEmailTeoYeuCau(string toEmail, string confirmLink)
        {
            MailMessage message = new MailMessage(FromEmail, toEmail);
            message.Subject = "Yêu cầu đổi mật khẩu!";
            message.Body = TemplateEmail.ForgetPass(confirmLink);
            message.IsBodyHtml = true;
            // Tạo đối tượng SmtpClient
            SmtpClient smtpClient = new SmtpClient(SmtpHost, SmtpPort);
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential(FromEmail, Password16);
            smtpClient.EnableSsl = true;
            try
            {
                // Gửi email
                smtpClient.Send(message);
                return;
            }
            catch (Exception ex)
            {
                return;
            }
        }

       
        //public bool SendForgetPass(string toEmail, string confirmLink)
        //{
        //    MailMessage message = new MailMessage(FromEmail, toEmail);
        //    message.Subject = "Xác nhận yêu cầu đổi mật khẩu tài khoản NHA TOT";
        //    message.Body = TemplateEmail.ForgetPass(confirmLink);
        //    message.IsBodyHtml = true;
        //    // Tạo đối tượng SmtpClient
        //    SmtpClient smtpClient = new SmtpClient(SmtpHost, SmtpPort);
        //    smtpClient.UseDefaultCredentials = false;
        //    smtpClient.Credentials = new NetworkCredential(FromEmail, Password16);
        //    smtpClient.EnableSsl = true;
        //    try
        //    {
        //        // Gửi email
        //        smtpClient.Send(message);
        //        return true;
        //    }
        //    catch (Exception ex)
        //    {
        //        return false;
        //    }
        //}

    }
}
