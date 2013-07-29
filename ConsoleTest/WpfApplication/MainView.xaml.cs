using DAP.Adorners;
using MahApps.Metro.Controls;
using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using WpfApplication.Models.Album;

namespace WpfApplication
{
	/// <summary>
	/// MainView.xaml 的交互逻辑
	/// </summary>
	public partial class MainView : MetroWindow
	{
		public MainView()
		{
			InitializeComponent();
			Loaded += MainView_Loaded;
		}

		void MainView_Loaded(object sender, RoutedEventArgs e)
		{
			//throw new NotImplementedException();
			DataContext = new MainViewModel();
		}

		private void btnUploadClick(object sender, RoutedEventArgs e)
		{
			var flyout = this.Flyouts.Items[0] as Flyout;
			if (flyout == null)
			{
				return;
			}

			flyout.IsOpen = !flyout.IsOpen;
		}
		private void btnSelectPhotosClick(object sender, RoutedEventArgs e)
		{
			var openFileDialog = new OpenFileDialog();
			openFileDialog.Multiselect = true;
			openFileDialog.Filter = "Image files (*.jpg, *.jpeg, *.jpe, *.jfif, *.png) | *.jpg; *.jpeg; *.jpe; *.jfif; *.png"; 

			//Open the Pop-Up Window to select the file 
			if (openFileDialog.ShowDialog() == true && openFileDialog.FileNames.Length>0)
			{
				//new FileInfo(dlg.FileName);
				//using (Stream s = dlg.OpenFile())
				//{
				//	TextReader reader = new StreamReader(s);
				//	string st = reader.ReadToEnd();
				//	txtPath.Text = dlg.FileName;
				//}
				this.photoFiles = new List<PhotoFile>();
				int index = 0;
				foreach (string filePath in openFileDialog.FileNames)
				{
					var fileInfo = new FileInfo(filePath);
					this.photoFiles.Add(new PhotoFile()
					{
						Id  = index++,
						Name = fileInfo.Name,
						FileName = fileInfo.FullName,
						Status = "Waiting"
					});
				}
				dgUploadPhoto.DataContext = this.photoFiles;
				dgUploadPhoto.SetBinding(ListView.ItemsSourceProperty, new Binding());
				this.editImage(this.autoSelectImage());
			} 
		}
		private PhotoFile autoSelectImage()
		{
			return this.photoFiles.First(query => query.NewFileName == null && query.Status == "Waiting");
		}
		private void editImage( PhotoFile photoFile )
		{
			this.currentPhotoFile = photoFile;
			BitmapImage bmp = new BitmapImage(new Uri(photoFile.FileName));
			imgEdit.Source = bmp;
			this.addCropToElement(this.imgEdit);
		}

		private void addCropToElement(FrameworkElement file)
		{
			Rect rcrcInterior = new Rect(
				file.ActualWidth * .2,
				file.ActualHeight * .2,
				file.ActualWidth * .6,
				file.ActualHeight * .6);
			AdornerLayer ady = AdornerLayer.GetAdornerLayer(file);
			this.crop = new CroppingAdorner(file, rcrcInterior);
			ady.Add(this.crop);

			imgUploadPreview.Source = this.crop.BpsCrop();
			this.crop.CropChanged += this.crop_CropChanged;
		}

		void crop_CropChanged(object sender, RoutedEventArgs e)
		{
			this.refreshCropImage();
			//throw new NotImplementedException();
		}

		private void refreshCropImage()
		{
			if (this.crop != null)
			{
				Rect rc = this.crop.ClippingRectangle;

				//tblkClippingRectangle.Text = string.Format(
				//	"Clipping Rectangle: ({0:N1}, {1:N1}, {2:N1}, {3:N1})",
				//	rc.Left,
				//	rc.Top,
				//	rc.Right,
				//	rc.Bottom);
				imgUploadPreview.Source = this.crop.BpsCrop();
			}
		}
		private List<PhotoFile> photoFiles { get; set; }
		public PhotoFile currentPhotoFile { get; set; }

		public CroppingAdorner crop { get; set; }
	}
	public class PhotoFile
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string FileName { get; set; }
		public string NewFileName { get; set; }
		public string Status { get; set; }
	}
}
