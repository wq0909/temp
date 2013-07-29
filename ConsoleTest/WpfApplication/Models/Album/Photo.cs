using System;
using System.ComponentModel;
using WpfApplication.Models.Common;

namespace WpfApplication.Models.Album
{
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