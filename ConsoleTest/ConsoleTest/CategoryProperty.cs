using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest
{
    public class CategoryProperty
    {
        public CategoryProperty()
        {
            string url = "http://hz.productposting.alibaba.com/product/selectedCategoryAjax.htm?_fmp.se._0.c=100106&action=selected_category_ajax_action&event_submit_do_selected_category=anything&time=0.2721279861914302";
            var cookie = My.loginCookie;
            string propertyString = Common.SendUrl(url, ref cookie, null);
            JObject o = JObject.Parse(propertyString);
            if( (bool)o["success"] ){
                string jsonString = "{root:"+(string)o["sysAttrjson"]+"}";
                JObject json = JObject.Parse(jsonString);

            }
        }
    }
}
