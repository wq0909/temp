using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleTest
{
    public class Category
    {
        public string ParentNode { set; get; }
        public int CategoryId { set; get; }
        public string CategoryName { set; get; }
        public bool HasPrivilege { set; get; }
        public string WarnMessage { set; get; }
    }
}
