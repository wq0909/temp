using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Text.RegularExpressions;

namespace ConsoleTest
{
    class Program
    {
        static void Main(string[] args)
        {
            TestUrl.action();
        }
    }
    public static class TestUrl
    {
        public static void action()
        {
            CookieContainer cookie = new CookieContainer();
            NameValueCollection headderColl = new NameValueCollection();
            headderColl.Add("Referer", "https://login.alibaba.com");

             string output = TestUrl.sendUrl("https://login.alibaba.com/", ref cookie, headderColl);

             output = TestUrl.sendUrl("https://login.alibaba.com/xman/xlogin.js?pd=alibaba&pageFrom=standardlogin&u_token=B634507bd7c342df39b6937541c3d3be5&xloginPassport=aliqatest01&xloginPassword=1227qa01aetest&dmtrack_pageid=73c5f09b6e4bd84051c8606513f76b890046df13bb", ref cookie, headderColl);

            var match = Regex.Match(output, ":\"(.*?)\"}$");
            string tokenString = match.Groups[1].Value;

            output = TestUrl.sendUrl("https://passport.alipay.com/mini_apply_st.js?site=4&callback=window.xmanDealTokenCallback&token=" + tokenString, ref cookie, headderColl);

            match = Regex.Match(output, "\"st\":\"(.*?)\"},", RegexOptions.Multiline);
            string st = match.Groups[1].Value;

            //string st = Regex.Match( matchString, "^\"st\":\"(.*?)\"},$" ).Groups[1].Value;
            output = TestUrl.sendUrl("https://login.alibaba.com/validateST.htm?st=" + st + "&pd=alibaba&pageFrom=standardlogin&u_token=B634507bd7c342df39b6937541c3d3be5&xloginPassport=aliqatest01&xloginPassword=1227qa01aetest&dmtrack_pageid=73c5f09b6e4bd84051c8606513f76b890046df13bb", ref cookie,  headderColl);

            Console.WriteLine(output);

            output = TestUrl.sendUrl("http://sh.vip.alibaba.com/index.htm", ref cookie, headderColl);

            Console.WriteLine(output.IndexOf("CRM_notice.html") > -1 ? "-----------------------------ok-------------------------------" : "fxxx");
            Console.ReadLine();
        }
        public static string sendUrl(string url, ref CookieContainer cookie, NameValueCollection headerColl)
        {
            // Create a request for the URL. 		
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);

            /*//实例化CookieContainer对象
            System.Net.CookieContainer cookieContainer = new System.Net.CookieContainer();
            //设置附加的Cookie
            cookieContainer.SetCookies(new Uri(url), "");
            */

            // If required by the server, set the credentials.
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Method = "GET";
            request.UserAgent = "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0)Gecko/20100101 Firefox/21.0";
            request.KeepAlive = true;
            request.Accept = "*/*";
            request.CookieContainer = cookie;
            if (headerColl != null)
            {
                if( !string.IsNullOrEmpty(headerColl.Get("Referer"))){
                    request.Referer = headerColl.Get("Referer");
                }
            }

            Console.WriteLine("##");
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

            foreach (Cookie c in response.Cookies)
            {
                Console.WriteLine(c.Name + ":" + c.Value);
                //cookie.Add(c);
            }
            
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