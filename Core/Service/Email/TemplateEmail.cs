using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Service.Email
{
    public class TemplateEmail
    {
        public static string ForgetPass(string data)
        {
            //return "🌱 Xin chào mình nhận được yêu cầu đổi mật khẩu tài khoản DJ - Coding để hoàn thành xác nhận vui lòng nhập mã xác nhận dưới đây. " +
            //    Settings.enviroment() + "/#/forwardrequestforgetpass/" + data +
            //    ". Nếu bạn không có yêu cầu này vui lòng bỏ qua.";
            string link = "http://localhost:3000/quenmatkhau/" + data;
            return @"<!DOCTYPE html PUBLIC ""-//W3C//DTD XHTML 1.0 Transitional//EN"" ""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"">
<html xmlns=""http://www.w3.org/1999/xhtml"" xmlns:o=""urn:schemas-microsoft-com:office:office"">

<head>
    <meta charset=""UTF-8"">
    <meta content=""width=device-width, initial-scale=1"" name=""viewport"">
    <meta name=""x-apple-disable-message-reformatting"">
    <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"">
    <meta content=""telephone=no"" name=""format-detection"">
    <title></title>
    <!--[if (mso 16)]>
    <style type=""text/css"">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href=""https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"" rel=""stylesheet"">
    <!--<![endif]-->
</head>

<body>
    <div class=""es-wrapper-color"">
        <!--[if gte mso 9]>
			<v:background xmlns:v=""urn:schemas-microsoft-com:vml"" fill=""t"">
				<v:fill type=""tile"" color=""#FFE7F3""></v:fill>
			</v:background>
		<![endif]-->
        <table class=""es-wrapper"" width=""100%"" cellspacing=""0"" cellpadding=""0"">
            <tbody>
                <tr>
                    <td class=""esd-email-paddings"" valign=""top"">
                        <table cellpadding=""0"" cellspacing=""0"" class=""esd-header-popover es-header"" align=""center"">
                            <tbody>
                                <tr>
                                    <td class=""esd-stripe"" align=""center"">
                                        <table bgcolor=""#ffffff"" class=""es-header-body"" align=""center"" cellpadding=""0"" cellspacing=""0"" width=""600"" style=""border-left:4px solid #ffffff;border-right:4px solid #ffffff;border-top:4px solid #ffffff;border-bottom:4px solid #ffffff;"">
                                            <tbody>
                                                <tr>
                                                    <td class=""esd-structure es-p20"" align=""left"" esd-custom-block-id=""740648"">
                                                        <!--[if mso]><table width=""552"" cellpadding=""0"" cellspacing=""0""><tr><td width=""150"" valign=""top""><![endif]-->
                                                        <table cellpadding=""0"" cellspacing=""0"" align=""left"" class=""es-left"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""150"" class=""es-m-p0r esd-container-frame es-m-p20b"" valign=""top"" align=""center"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                  
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width=""20""></td><td width=""382"" valign=""top""><![endif]-->
                                                        <table cellpadding=""0"" cellspacing=""0"" class=""es-right"" align=""right"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""382"" align=""left"" class=""esd-container-frame"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr class=""es-mobile-hidden"">
                                                                                    <td align=""center"" class=""esd-block-spacer"" height=""15""></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class=""esd-block-menu"" esd-tmp-menu-padding=""5|5"" esd-tmp-menu-font-weight=""bold"">
                                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"" class=""es-menu"">
                                                                                            <tbody>
                                                                                                <tr class=""links"">
                                                                                                    <td align=""center"" valign=""top"" width=""25%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 5px; padding-bottom: 5px;""><a target=""_blank"" href=""https://dj-xuyenchi.edu.vn/#/home/courselist"" style=""font-weight: bold;text-decoration:none"">Khóa học</a></td>
                                                                                                    <td align=""center"" valign=""top"" width=""25%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 5px; padding-bottom: 5px;""><a target=""_blank"" href=""https://dj-xuyenchi.edu.vn/#/home/post"" style=""font-weight: bold;text-decoration:none"">Bài viết</a></td>
                                                                                                    <td align=""center"" valign=""top"" width=""25%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 5px; padding-bottom: 5px;""><a target=""_blank"" href=""https://www.youtube.com/playlist?list=PLMghwUOMNMIqgqzXDhfh2D2ED57Suoi77"" style=""font-weight: bold;text-decoration:none"">Vlog</a></td>
                                                                                                    <td align=""center"" valign=""top"" width=""25%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 5px; padding-bottom: 5px;""><a target=""_blank"" href=""https://dj-xuyenchi.edu.vn/#/home/lobby"" style=""font-weight: bold;text-decoration:none"">Sự kiện</a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding=""0"" cellspacing=""0"" class=""es-content"" align=""center"">
                            <tbody>
                                <tr>
                                    <td class=""esd-stripe"" align=""center"">
                                        <table bgcolor=""#D8599E"" class=""es-content-body"" align=""center"" cellpadding=""0"" cellspacing=""0"" width=""600"" style=""border-left:4px solid #ffffff;border-right:4px solid #ffffff;"">
                                            <tbody>
                                                <tr>
                                                    <td class=""esd-structure"" align=""left"">
                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""592"" class=""esd-container-frame"" align=""center"" valign=""top"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align=""center"" class=""esd-block-image"" style=""font-size: 0px;""><img class=""adapt-img"" src=""https://tlr.stripocdn.email/content/guids/CABINET_17414fab6e31e9aa151544b147dab92e/images/30829710_7742029.png"" alt=""Hocus pocus"" style=""display: block;"" width=""592"" title=""Hocus pocus""></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class=""esd-structure es-p40b es-p20r es-p20l"" align=""left"" bgcolor=""#D8599E"" style=""background-color: #d8599e;"">
                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""552"" class=""esd-container-frame"" align=""center"" valign=""top"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align=""center"" class=""esd-block-text es-p30t es-m-txt-c"">
                                                                                        <h1>DJ - CodeMaster</h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align=""center"" class=""esd-block-text es-p10t es-m-txt-c"">
                                                                                        <h2>Yêu cầu đổi mật khẩu</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align=""center"" class=""esd-block-text es-p10t es-p10b es-p40r es-p40l es-m-p0r es-m-p0l"">
                                                                                        <p style=""color: #ffffff;margin-bottom:20px"">Nếu không phải yêu cầu từ bạn vui lòng bỏ qua email này.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width=""552"" class=""esd-container-frame"" align=""center"" valign=""top"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                 <td align=""center"" class=""esd-block-button es-p10t es-p30b""><a target=""_blank"" href=""" + link + @"""style=""text-decoration:none""><span class=""es-button-border"" style=""border-radius: 10px; background: transparent; border-color: #d8599e;display:block;height:48px;background-color:pink;width:280px;font-size:24px;line-height:48px"">Đổi mật khẩu</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                               
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class=""esd-structure"" align=""left"">
                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""592"" class=""esd-container-frame"" align=""center"" valign=""top"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align=""center"" class=""esd-block-image"" style=""font-size: 0px;""><img class=""adapt-img"" src=""https://tlr.stripocdn.email/content/guids/CABINET_17414fab6e31e9aa151544b147dab92e/images/7742035_kVr.png"" alt=""Happy Halloween"" style=""display: block;"" width=""592"" title=""Happy Halloween""></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding=""0"" cellspacing=""0"" class=""es-footer"" align=""center"">
                            <tbody>
                                <tr>
                                    <td class=""esd-stripe"" align=""center"" esd-custom-block-id=""740649"">
                                        <table class=""es-footer-body"" align=""center"" cellpadding=""0"" cellspacing=""0"" width=""600"" style=""border-left:4px solid #ffffff;border-right:4px solid #ffffff;border-top:4px solid #ffffff;background-color: transparent;"">
                                            <tbody>
                                                <tr>
                                                    <td class=""esd-structure es-p40t es-p20r es-p20l"" align=""left"">
                                                        <!--[if mso]><table width=""552"" cellpadding=""0"" cellspacing=""0""><tr><td width=""120"" valign=""top""><![endif]-->
                                                        <table cellpadding=""0"" cellspacing=""0"" align=""left"" class=""es-left"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""100"" class=""esd-container-frame es-m-p20b"" align=""left"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                  
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td class=""es-hidden"" width=""20""></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width=""267"" valign=""top""><![endif]-->
                                                        <table cellpadding=""0"" cellspacing=""0"" class=""es-left"" align=""left"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""267"" align=""left"" class=""esd-container-frame es-m-p20b"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class=""esd-block-menu"" esd-tmp-menu-padding=""20|5"" esd-tmp-divider=""0|solid|#cccccc"" esd-tmp-menu-color=""#999999"" esd-tmp-menu-font-weight=""bold"">
                                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"" class=""es-menu"">
                                                                                            <tbody>
                                                                                                <tr class=""links"">
                                                                                                    <td align=""center"" valign=""top"" width=""33.33%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 20px; padding-bottom: 5px;""><a target=""_blank"" href=""https://dj-xuyenchi.edu.vn/#/home/lobby"" style=""font-weight: bold;"">Trang chủ</a></td>
                                                                                                    <td align=""center"" valign=""top"" width=""33.33%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 20px; padding-bottom: 5px;""><a target=""_blank"" href=""https://dj-xuyenchi.edu.vn/#/home/courselist"" style=""font-weight: bold;"">Khóa học</a></td>
                                                                                                    <td align=""center"" valign=""top"" width=""33.33%"" class=""es-p10t es-p10b es-p5r es-p5l"" style=""padding-top: 20px; padding-bottom: 5px;""><a target=""_blank"" href=""https://dj-xuyenchi.edu.vn/#/home/post"" style=""font-weight: bold;"">Bài viết</a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width=""20""></td><td width=""145"" valign=""top""><![endif]-->
                                                        <table cellpadding=""0"" cellspacing=""0"" class=""es-right"" align=""right"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""145"" align=""left"" class=""esd-container-frame"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align=""right"" class=""esd-block-social es-p15t es-p5b es-m-p0t es-m-p0b es-m-txt-c"" style=""font-size:0"">
                                                                                        <table cellpadding=""0"" cellspacing=""0"" class=""es-table-not-adapt es-social"">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align=""center"" valign=""top"" class=""es-p15r"" esd-tmp-icon-type=""facebook""><a target=""_blank"" href=""https://www.facebook.com/groups/djxuyenchi.edu.vn/""><img title=""Facebook"" src=""https://tlr.stripocdn.email/content/guids/CABINET_dec2867a6dd7e33ef5eded294a6a7bb1/images/mask_group1.png"" alt=""Fb"" width=""24"" height=""24""></a></td>
                                                                                                    
                                                                                                    <td align=""center"" valign=""top"" esd-tmp-icon-type=""youtube""><a target=""_blank"" href=""https://www.youtube.com/channel/UCeJJbBp9ZSYwFK-U0YBY1pw""><img title=""Youtube"" src=""https://tlr.stripocdn.email/content/guids/CABINET_dec2867a6dd7e33ef5eded294a6a7bb1/images/mask_group.png"" alt=""Yt"" width=""24"" height=""24""></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class=""esd-structure es-p30t es-p30b"" align=""left"">
                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""592"" class=""esd-container-frame"" align=""center"" valign=""top"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align=""center"" class=""esd-block-text es-m-p20r es-m-p20l"">
                                                                                        <p>DJ- CodeMaster</p>
                                                                                        <a href=""""><p></p>   </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding=""0"" cellspacing=""0"" class=""esd-footer-popover es-footer"" align=""center"">
                            <tbody>
                                <tr>
                                    <td class=""esd-stripe"" align=""center"">
                                        <table bgcolor=""#ffffff"" class=""es-footer-body"" align=""center"" cellpadding=""0"" cellspacing=""0"" width=""600"" style=""border-left:4px solid #ffffff;border-right:4px solid #ffffff;border-bottom:4px solid #ffffff;"">
                                            <tbody>
                                                <tr>
                                                    <td class=""esd-structure es-p20t es-p20b es-p20r es-p20l"" align=""left"">
                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                            <tbody>
                                                                <tr>
                                                                    <td width=""552"" class=""es-m-p20b esd-container-frame"" align=""left"">
                                                                        <table cellpadding=""0"" cellspacing=""0"" width=""100%"">
                                                                            <tbody>
                                                                                <tr>
                                                                                \
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>";
        }
    }
}