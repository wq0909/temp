using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApplication.Models.Album
{
	public class PhotoGroup
	{
		//"companyId":200012245,"levelCode":"11,,","text":"testserer","value":201800333}
		[DisplayName("companyId")]
		public Int32 CompanyId { get; set; }
		[DisplayName("levelCode")]
		public string LevelCode { get; set; }
		[DisplayName("text")]
		public string Text { get; set; }
		[DisplayName("value")]
		public string Value { get; set; }
	}
}
