using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApplication.Models.Album
{
	public class Album
	{
		private JObject photoJSON = null;
		private JObject groupJSON = null;
		public Album()
		{
			this.getPhotosJson();
			this.getPhotoGroupsJson();
		}
		private JObject getPhotosJson()
		{
			string jsonString = "{\"total\":7,\"urlMap\":{\"431097808\":\"http://hz00.i.aliimg.com/img/pb/808/097/431/431097808_688.jpg\",\"698452336\":\"http://hz01.i.aliimg.com/img/pb/336/452/698/698452336_313.jpg\",\"431097805\":\"http://hz00.i.aliimg.com/img/pb/805/097/431/431097805_762.jpg\",\"431257863\":\"http://hz01.i.aliimg.com/img/pb/863/257/431/431257863_732.jpg\",\"431097807\":\"http://hz01.i.aliimg.com/img/pb/807/097/431/431097807_538.jpg\",\"431097806\":\"http://hz00.i.aliimg.com/img/pb/806/097/431/431097806_743.jpg\",\"431097803\":\"http://hz01.i.aliimg.com/img/pb/803/097/431/431097803_509.jpg\"},\"query\":{\"companyId\":200012245,\"currentPage\":1,\"displayNameUtf8\":\"\",\"endRow\":18,\"firstPage\":true,\"gmtCreateFrom\":\"\",\"gmtCreateTo\":\"\",\"gmtModifiedFrom\":\"\",\"gmtModifiedTo\":\"\",\"groupId\":200679985,\"isReference\":false,\"lastPage\":true,\"level1\":0,\"level2\":0,\"level3\":0,\"memberSeq\":0,\"name\":null,\"nextPage\":1,\"orderByList\":[{\"sortField\":\"GMT_MODIFIED\",\"sortSeq\":\"DESC\"},{\"sortField\":\"ID\",\"sortSeq\":\"DESC\"}],\"pageFristItem\":1,\"pageLastItem\":7,\"pageSize\":18,\"previousPage\":1,\"searchImageLocationType\":\"SUB_GROUP\",\"startRow\":1,\"totalItem\":7,\"totalPage\":1},\"imageInfos\":[{\"companyId\":200012245,\"displayName\":{\"value\":\"middle_085425_13651357520065365_34efbaa42f46bd2dafcdedc95c1a4693\"},\"displayNameUtf8\":\"middle_085425_13651357520065365_34efbaa42f46bd2dafcdedc95c1a4693\",\"fileName\":\"698452336_313.jpg\",\"fileSize\":99432,\"gmtCreate\":{\"date\":15,\"day\":1,\"hours\":0,\"minutes\":56,\"month\":6,\"seconds\":26,\"time\":1373874986000,\"timezoneOffset\":420,\"year\":113},\"gmtModified\":{\"date\":17,\"day\":3,\"hours\":19,\"minutes\":15,\"month\":6,\"seconds\":1,\"time\":1374113701000,\"timezoneOffset\":420,\"year\":113},\"groupId\":200679985,\"hashCode\":\"227ef347634a03aa3addf09be9cb0ea7\",\"height\":520,\"id\":698452336,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":1,\"status\":\"enable\",\"width\":780},{\"companyId\":200012245,\"displayName\":{\"value\":\"1\"},\"displayNameUtf8\":\"1\",\"fileName\":\"431257863_732.jpg\",\"fileSize\":903,\"gmtCreate\":{\"date\":29,\"day\":4,\"hours\":19,\"minutes\":24,\"month\":11,\"seconds\":47,\"time\":1325215487000,\"timezoneOffset\":480,\"year\":111},\"gmtModified\":{\"date\":29,\"day\":4,\"hours\":19,\"minutes\":27,\"month\":11,\"seconds\":57,\"time\":1325215677000,\"timezoneOffset\":480,\"year\":111},\"groupId\":200679985,\"hashCode\":\"e9ff32d949ffb5f99e84d427544dbd54\",\"height\":18,\"id\":431257863,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":0,\"status\":\"enable\",\"width\":18},{\"companyId\":200012245,\"displayName\":{\"value\":\"シーン\"},\"displayNameUtf8\":\"シーン\",\"fileName\":\"431097808_688.jpg\",\"fileSize\":67139,\"gmtCreate\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":28,\"month\":11,\"seconds\":26,\"time\":1325143706000,\"timezoneOffset\":480,\"year\":111},\"gmtModified\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":42,\"month\":11,\"seconds\":4,\"time\":1325144524000,\"timezoneOffset\":480,\"year\":111},\"groupId\":200679985,\"hashCode\":\"e86419bf67729e1d56ab5a03dc120b2c\",\"height\":600,\"id\":431097808,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":0,\"status\":\"enable\",\"width\":800},{\"companyId\":200012245,\"displayName\":{\"value\":\"दृश्य\"},\"displayNameUtf8\":\"दृश्य\",\"fileName\":\"431097807_538.jpg\",\"fileSize\":55936,\"gmtCreate\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":28,\"month\":11,\"seconds\":26,\"time\":1325143706000,\"timezoneOffset\":480,\"year\":111},\"gmtModified\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":42,\"month\":11,\"seconds\":4,\"time\":1325144524000,\"timezoneOffset\":480,\"year\":111},\"groupId\":200679985,\"hashCode\":\"283ddd00e6137dc2be2dcf888122d24c\",\"height\":700,\"id\":431097807,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":0,\"status\":\"enable\",\"width\":509},{\"companyId\":200012245,\"displayName\":{\"value\":\"مشهد\"},\"displayNameUtf8\":\"مشهد\",\"fileName\":\"431097806_743.jpg\",\"fileSize\":44016,\"gmtCreate\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":28,\"month\":11,\"seconds\":26,\"time\":1325143706000,\"timezoneOffset\":480,\"year\":111},\"gmtModified\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":42,\"month\":11,\"seconds\":4,\"time\":1325144524000,\"timezoneOffset\":480,\"year\":111},\"groupId\":200679985,\"hashCode\":\"5c2645556298622519f8da78ec6e8271\",\"height\":800,\"id\":431097806,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":0,\"status\":\"enable\",\"width\":639},{\"companyId\":200012245,\"displayName\":{\"value\":\"Фотографії\"},\"displayNameUtf8\":\"Фотографії\",\"fileName\":\"431097805_762.jpg\",\"fileSize\":133353,\"gmtCreate\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":28,\"month\":11,\"seconds\":26,\"time\":1325143706000,\"timezoneOffset\":480,\"year\":111},\"gmtModified\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":42,\"month\":11,\"seconds\":4,\"time\":1325144524000,\"timezoneOffset\":480,\"year\":111},\"groupId\":200679985,\"hashCode\":\"fb5ab6b921a818c413f9247d2c175f33\",\"height\":450,\"id\":431097805,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":0,\"status\":\"enable\",\"width\":600},{\"companyId\":200012245,\"displayName\":{\"value\":\"Szene\"},\"displayNameUtf8\":\"Szene\",\"fileName\":\"431097803_509.jpg\",\"fileSize\":112305,\"gmtCreate\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":28,\"month\":11,\"seconds\":26,\"time\":1325143706000,\"timezoneOffset\":480,\"year\":111},\"gmtModified\":{\"date\":28,\"day\":3,\"hours\":23,\"minutes\":42,\"month\":11,\"seconds\":4,\"time\":1325144524000,\"timezoneOffset\":480,\"year\":111},\"groupId\":200679985,\"hashCode\":\"0fe2b7af8163747345e7231976135da3\",\"height\":600,\"id\":431097803,\"memberId\":\"aliqatest01\",\"memberName\":\"vtesttt cgstest\",\"memberSeq\":200042360,\"referenceCount\":0,\"status\":\"enable\",\"width\":800}]}";
			this.photoJSON = JObject.Parse(jsonString);
			return this.photoJSON;
		}
		private JObject getPhotoGroupsJson()
		{
			string jsonString = "[{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=15,,&value=204314879&text=6345345345345666\",\"node\":{\"companyId\":200012245,\"levelCode\":\"15,,\",\"text\":\"6345345345345666\",\"value\":204314879}},{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=9,,&value=201701796&text=advert\",\"node\":{\"companyId\":200012245,\"levelCode\":\"9,,\",\"text\":\"advert\",\"value\":201701796}},{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=3,,&value=200679985&text=asdfasdfadsf\",\"node\":{\"companyId\":200012245,\"levelCode\":\"3,,\",\"text\":\"asdfasdfadsf\",\"value\":200679985}},{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=14,,&value=204203325&text=cs\",\"node\":{\"companyId\":200012245,\"levelCode\":\"14,,\",\"text\":\"cs\",\"value\":204203325}},{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=8,,&value=200848214&text=fasdfas\",\"node\":{\"companyId\":200012245,\"levelCode\":\"8,,\",\"text\":\"fasdfas\",\"value\":200848214}},{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=13,,&value=204172982&text=test3\",\"node\":{\"companyId\":200012245,\"levelCode\":\"13,,\",\"text\":\"test3\",\"value\":204172982}},{\"branch\":\"ajaxImageGroup.htm?event=listSubGroups&levelCode=11,,&value=201800333&text=testserer\",\"node\":{\"companyId\":200012245,\"levelCode\":\"11,,\",\"text\":\"testserer\",\"value\":201800333}}]";
			this.groupJSON = JObject.Parse("{root:" + jsonString + "}");
			return this.groupJSON;
		}
		private List<Photo> jsonToPhotoList()
		{
			var imageInfos = this.photoJSON["imageInfos"];
			var urlMap = this.photoJSON["urlMap"];
			var photos = JsonConvert.DeserializeObject<List<Photo>>(JsonConvert.SerializeObject(imageInfos));
			foreach (JProperty item in urlMap)
			{
				foreach (var photo in photos)
				{
					if (photo.Id.ToString() == item.Name)
					{
						photo.Url = item.Value.ToString();
						break;
					}
				}
			}
			return photos;
		}
		private List<PhotoGroup> jsonToGroupList()
		{
			var groupsInfo = this.groupJSON["root"].Select(query => query["node"]);
			var groups = JsonConvert.DeserializeObject<List<PhotoGroup>>(JsonConvert.SerializeObject(groupsInfo));
			return groups;
		}
		public IList<Photo> GetPhotos()
		{
			return this.jsonToPhotoList();
		}
		public IList<PhotoGroup> GetPhotoGroups()
		{
			return this.jsonToGroupList();
		}
	}
}
