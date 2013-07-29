using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest
{
	public class JavascriptDateTime
	{
		[DisplayName("date")]
		public int Date { get; set; }
		[DisplayName("day")]
		public int Day { get; set; }
		[DisplayName("hours")]
		public int Hours { get; set; }
		[DisplayName("minutes")]
		public int Minutes { get; set; }
		[DisplayName("month")]
		public int Month { get; set; }
		[DisplayName("seconds")]
		public int Seconds { get; set; }
		[DisplayName("time")]
		public Int64 Time { get; set; }
		[DisplayName("timezoneOffset")]
		public int TimezoneOffset { get; set; }
		[DisplayName("year")]
		public int Year { get; set; }
		public DateTime GetDateTime
		{
			get
			{
				var dt = new DateTime(this.Year, this.Month, this.Day, this.Hours, this.Minutes, this.Seconds);
				return dt;
			}
		}
	}
	public class Photo
	{
		[DisplayName("url")]
		public string Url { get; set; }
		[DisplayName("companyId")]
		public Int32 CompanyId { get; set; }
		[DisplayName("displayNameUtf8")]
		public string DisplayNameUtf8 { get; set; }
		[DisplayName("fileName")]
		public string FileName { get; set; }
		[DisplayName("fileSize")]
		public Int32 FileSize { get; set; }
		[DisplayName("gmtCreate")]
		public JavascriptDateTime GmtCreate { get; set; }
		[DisplayName("gmtModified")]
		public JavascriptDateTime GmtModified { get; set; }
		[DisplayName("groupId")]
		public Int32 GroupId { get; set; }
		[DisplayName("hashCode")]
		public string HashCode { get; set; }
		[DisplayName("height")]
		public int Height { get; set; }
		[DisplayName("id")]
		public Int32 Id { get; set; }
		[DisplayName("memberId")]
		public string MemberId { get; set; }
		[DisplayName("memberName")]
		public string MemberName { get; set; }
		[DisplayName("memberSeq")]
		public Int32 MemberSeq { get; set; }
		[DisplayName("referenceCount")]
		public int ReferenceCount { get; set; }
		[DisplayName("status")]
		public string Status { get; set; }
		[DisplayName("width")]
		public Int32 Width { get; set; }
	}
}