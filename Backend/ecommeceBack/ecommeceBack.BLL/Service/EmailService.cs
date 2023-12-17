using ecommeceBack.BLL.contrato;
using MailKit.Security;
using Microsoft.Extensions.Configuration;
using MimeKit.Text;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MailKit.Net.Smtp;

namespace ecommeceBack.BLL.Service
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration configuration;
        public EmailService(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        public async Task<bool> EnviarEmailAsync(string emailDestinatario, string asunto, string mensaje)
        {

            try
            {
                var email = new MimeMessage();

                email.From.Add(new MailboxAddress("SurShop", configuration["Email:UserName"]));


                email.To.Add(MailboxAddress.Parse(emailDestinatario));

                email.Subject = asunto;

                email.Body = new TextPart(TextFormat.Html)
                {
                    Text = mensaje
                };


                using (var smtp = new SmtpClient())
                {

                    await smtp.ConnectAsync(configuration["Email:Host"], int.Parse(configuration["Email:Port"]!), SecureSocketOptions.StartTls);

                    await smtp.AuthenticateAsync(configuration["Email:UserName"], configuration["Email:PassWord"]);

                    await smtp.SendAsync(email);

                    await smtp.DisconnectAsync(true);
                } ;


                return true;
            }
            catch (Exception)
            {

                return false;
            }


        }

        public async Task<bool> EnviarEmailAsync(string emailDestinatario, string asunto, string mensaje, string? urlPdf = null, string? nombrePdf = null)
        {

            try
            {
                var email = new MimeMessage();

                email.From.Add(new MailboxAddress("SurShop", configuration["Email:UserName"]));


                email.To.Add(MailboxAddress.Parse(emailDestinatario));

                email.Subject = asunto;

                email.Body = new TextPart(TextFormat.Html)
                {
                    Text = mensaje
                };


                // Descargar el archivo PDF desde la URL
                if (urlPdf != null)
                {

                    using (var httpClient = new HttpClient())
                    {
                        var pdfBytes = await httpClient.GetByteArrayAsync(urlPdf);

                        // Adjuntar el archivo PDF
                        var adjunto = new MimePart("application", "pdf")
                        {
                            Content = new MimeContent(new MemoryStream(pdfBytes), ContentEncoding.Default),
                            ContentDisposition = new ContentDisposition(ContentDisposition.Attachment),
                            ContentTransferEncoding = ContentEncoding.Base64,
                            FileName = nombrePdf == null ? "factura_compra.pdf" : $"{nombrePdf}.pdf"
                        };

                        // Agregar el adjunto al correo electrónico
                        email.Body = new Multipart("mixed") { email.Body, adjunto };
                    }
                }

                using (var smtp = new SmtpClient())
                {

                    await smtp.ConnectAsync(configuration["Email:Host"], int.Parse(configuration["Email:Port"]!), SecureSocketOptions.StartTls);

                    await smtp.AuthenticateAsync(configuration["Email:UserName"], configuration["Email:PassWord"]);

                    await smtp.SendAsync(email);

                    await smtp.DisconnectAsync(true);
                };


                return true;
            }
            catch (Exception)
            {

                return false;
            }


        }
    }
}
