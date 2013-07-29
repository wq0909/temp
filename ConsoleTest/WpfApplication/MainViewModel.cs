using MahApps.Metro.Controls;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using WpfApplication.Models.Album;

namespace WpfApplication
{
	public class MainViewModel:  INotifyPropertyChanged, IDataErrorInfo
	{
		readonly PanoramaGroup _album;

		public MainViewModel()
        {
			var album = new Album();
            _album = new PanoramaGroup("trending tracks");
			Photos = new ObservableCollection<PanoramaGroup> { _album };
			_album.SetSource(album.GetPhotos());

			PhotoGroups = album.GetPhotoGroups();
        }

		public ObservableCollection<PanoramaGroup> Photos { get; set; }
		public IList<PhotoGroup> PhotoGroups { get; set; }
        public string Title { get; set; }
        public List<Album> Albums { get; set; }
		public event PropertyChangedEventHandler PropertyChanged;

		public string Error
		{
			get { throw new NotImplementedException(); }
		}

		public string this[string columnName]
		{
			get { throw new NotImplementedException(); }
		}
	}
}
