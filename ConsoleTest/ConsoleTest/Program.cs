using System;
using System.IO;
using System.Net;
using System.Text.RegularExpressions;

namespace ConsoleTest
{
    class Program
    {
        static void Main(string[] args)
        {
            CookieContainer cookie = new CookieContainer();


            string output = TestUrl.sendUrl("https://login.alibaba.com/", ref cookie);

            output = TestUrl.sendUrl("https://login.alibaba.com/xman/xlogin.js?pd=alibaba&pageFrom=standardlogin&u_token=&xloginPassport=aliqatest01&xloginPassword=1227qa01aetest&dmtrack_pageid=79001dc26e4bd84051c7e1cf13f74ca14e713b5b05", ref cookie);

            var match = Regex.Match(output, ":\"(.*?)\"}$");
            string tokenString = match.Groups[1].Value;

            output = TestUrl.sendUrl("https://passport.alipay.com/mini_apply_st.js?site=4&callback=window.xmanDealTokenCallback&token=" + tokenString, ref cookie);

            output = TestUrl.sendUrl("https://login.alibaba.com/validateST.htm?st=" + tokenString + "&pd=alibaba&pageFrom=standardlogin&u_token=&xloginPassport=aliqatest01&xloginPassword=1227qa01aetest&dmtrack_pageid=79001dc26e4bd84051c7e1cf13f74ca14e713b5b05", ref cookie);

            output = TestUrl.sendUrl("http://sh.vip.alibaba.com/index.htm", ref cookie);

            Console.WriteLine(output.IndexOf("CRM_notice.html") > -1 ? "-----------------------------ok-------------------------------" : "fxxx");
            Console.ReadLine();

        }
    }
    public static class TestUrl
    {
        public static string sendUrl(string url, ref CookieContainer cookie)
        {
            // Create a request for the URL. 		
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);

            //实例化CookieContainer对象
            System.Net.CookieContainer cookieContainer = new System.Net.CookieContainer();
            //设置附加的Cookie
            cookieContainer.SetCookies(new Uri(url), "");


            // If required by the server, set the credentials.
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Method = "GET";
            request.UserAgent = "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0)Gecko/20100101 Firefox/21.0";
            request.KeepAlive = true;
            request.CookieContainer = cookieContainer;

            Console.WriteLine(url);

            /*System.Net.CookieContainer cs = new System.Net.CookieContainer();
            System.Net.CookieCollection cc = cs.GetCookies(new Uri(url));
            foreach (Cookie c in cc)
            {
                Console.WriteLine(c.Name + "--" + c.Value);
            }*/

            // Get the response.
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            // Display the status.
            Console.WriteLine(response.StatusDescription);
            // Get the stream containing content returned by the server.
            Stream dataStream = response.GetResponseStream();
            // Open the stream using a StreamReader for easy access.
            StreamReader reader = new StreamReader(dataStream);
            // Read the content.
            string responseFromServer = reader.ReadToEnd();
            // Display the content.
            // Console.WriteLine(responseFromServer);
            // Cleanup the streams and the response.
            reader.Close();
            dataStream.Close();
            response.Close();
            return responseFromServer;
        }
    }
}