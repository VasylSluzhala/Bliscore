using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Bliscore.API.ViewModel;
using CompanyPage.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Bliscore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {

        [HttpGet]
        public string Get()
        {
                var mailText = $"From : test" +
                               Environment.NewLine +
                               $"test";
                var subject = "New contact us answer";
                var mails = new List<string>()
                {
                    //"schepanskiy1994@gmail.com",
                    //"roshom68@gmail.com",
                    //"mu.1.chested.09@gmail.com",
                    "info@bliscore.com"
                };

                MailHelper.Send(mailText, subject, mails);
            return "norm";
        }

        //[HttpGet]
        //public void Get([FromQuery]ContactUsViewModel model)
        //{
        //    try
        //    {
        //        var mailText = $"From : {model.Name} {model.Email}" +
        //                       Environment.NewLine +
        //                       $"{model.Message}";
        //        var subject = "New contact us answer";
        //        var mails = new List<string>()
        //        {
        //            //"schepanskiy1994@gmail.com",
        //            //"roshom68@gmail.com",
        //            //"mu.1.chested.09@gmail.com",
        //            "info@bliscore.com"
        //        };

        //        MailHelper.Send(mailText, subject, mails);
        //    }
        //    catch (Exception)
        //    {

        //        Response.StatusCode = (int)HttpStatusCode.BadRequest;
        //        return;
        //    }
        //}

        // POST api/mail
        [HttpPost]
        public void Post([FromBody] ContactUsViewModel model)
        {
            try
            {
                var mailText = $"From : {model.Name} {model.Email}" +
                               Environment.NewLine +
                               $"{model.Message}";
                var subject = "New contact us answer";
                var mails = new List<string>()
                {
                    "info@bliscore.com"
                };

                MailHelper.Send(mailText, subject, mails);
            }
            catch (Exception)
            {

                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return;
            }

            return;
        }
    }
}