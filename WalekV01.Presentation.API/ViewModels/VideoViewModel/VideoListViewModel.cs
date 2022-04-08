namespace WalekV01.Presentation.API.ViewModels.VideoViewModel
{
    public class VideoListViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Duration { get; set; }
        public int? Episode { get; set; }
        public string Producer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int GenderId { get; set; }
        
    }
}
