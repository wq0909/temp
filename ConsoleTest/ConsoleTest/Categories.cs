
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text.RegularExpressions;
namespace ConsoleTest
{
    public class Categories
    {
        private string categoryHtml = "";
        private IList<Category> categories = null;
        public Categories()
        {
            string url = "http://hz.productposting.alibaba.com/product/category_browse_iframe.htm?iframe_delete=true&set_domain=true&fromWhere=postStep1&postCategoryVersion=&categoryLicenseVersion=&categoryLicenseGroupVersion=&companyId=&catLang=en_us&locale=zh_cn";
            var cookie = My.loginCookie;
            this.categoryHtml = Common.SendUrl(url, ref cookie, null);
        }
        public IList<Category> getCategories()
        {
            this.categories = new List<Category>();

            var matches = Regex.Matches(this.categoryHtml, "new Category\\((.*?) \\)", RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.Multiline);
            foreach (Match m in matches)
            {
                var match = Regex.Match(m.Value, "new Category\\(\\s*(?<ParentNode>.*?)\\s*,\\s*\"(?<CategoryId>.*?)\"\\s*,\\s*\"(?<CategoryName>.*?)\"\\s*,\\s*\"(?<HasPrivilege>.*?)\",\\s*\"(?<WarnMessage>.*?)\"\\s*\\)");
                //Console.WriteLine(match.Groups["ParentNode"] + "-" + match.Groups["CategoryId"] + "-" + match.Groups["CategoryName"] + "-" + match.Groups["HasPrivilege"] + "-" + match.Groups["WarnMessage"]);

                int id = -1;
                if (int.TryParse(match.Groups["CategoryId"].Value, out id))
                {
                    var category = new Category();
                    category.ParentNode = match.Groups["ParentNode"].Value;
                    category.CategoryId = id;
                    category.HasPrivilege = bool.Parse(match.Groups["HasPrivilege"].Value);
                    category.CategoryName = match.Groups["CategoryName"].Value;
                    category.WarnMessage = match.Groups["WarnMessage"].Value;
                    this.categories.Add(category);
                }
            }

            return this.categories;
        }
    }
}