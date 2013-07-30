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
			this.KeyUp+=MainView_KeyUp;
		}

		void MainView_Loaded(object sender, RoutedEventArgs e)
		{
			//throw new NotImplementedException();
			DataContext = new MainViewModel();
		}

		private void btnUploadClick(object sender, RoutedEventArgs e)
		{
			if (this.uploadFlyout == null)
			{
				this.uploadFlyout = this.Flyouts.Items[0] as Flyout;
				this.uploadFlyout.IsOpenChanged += uploadFlyout_IsOpenChanged;
			}
			this.uploadFlyout.IsOpen = !this.uploadFlyout.IsOpen;
		}

		void uploadFlyout_IsOpenChanged(object sender, EventArgs e)
		{
			//throw new NotImplementedException();
			//this.
		}

		void MainView_KeyUp(object sender, KeyEventArgs e)
		{
			if (e.Key == System.Windows.Input.Key.Escape)
			{
				this.Close();
			}
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
		private void editImage(PhotoFile photoFile)
		{
			this.currentPhotoFile = photoFile;
			BitmapImage bmp = new BitmapImage(new Uri(photoFile.FileName));
			imgVisual.Source = bmp;
			imgVisual.Cursor = Cursors.ScrollAll;
			imgVisual.MouseDown += imgVisual_MouseDown;
			imgVisual.MouseUp += imgVisual_MouseUp;
			imgVisual.MouseMove += imgVisual_MouseMove;
			this.addCropToElement(imgVisual);
		}

		void imgVisual_MouseMove(object sender, MouseEventArgs e)
		{
			if (m_IsMouseLeftButtonDown)
			{
				Point position = e.GetPosition(imgVisual);
				imgVisual.X += position.X - m_PreviousMousePoint.X;
				imgVisual.Y += position.Y - m_PreviousMousePoint.Y;

				m_PreviousMousePoint = position;
			}
		}

		void imgVisual_MouseUp(object sender, MouseButtonEventArgs e)
		{
			imgVisual.ReleaseMouseCapture();
			m_IsMouseLeftButtonDown = false;
		}

		void imgVisual_MouseDown(object sender, MouseButtonEventArgs e)
		{
			imgVisual.CaptureMouse();
			m_IsMouseLeftButtonDown = true;
			m_PreviousMousePoint = e.GetPosition(imgVisual);
		}

		private void addCropToElement(FrameworkElement file)
		{
			Rect rcrcInterior = new Rect(
				file.ActualWidth * .6,
				file.ActualHeight * .6,
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

		public Flyout uploadFlyout { get; set; }

		public bool m_IsMouseLeftButtonDown { get; set; }

		public Point m_PreviousMousePoint { get; set; }
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
