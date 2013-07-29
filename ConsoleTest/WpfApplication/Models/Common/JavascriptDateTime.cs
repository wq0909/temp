using System;
using System.ComponentModel;

namespace WpfApplication.Models.Common
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
}
