namespace WalekV01.Presentation.API.ViewModels.VideoViewModel
{
    public class VideoCreateViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Duration { get; set; }
        public int? Episode { get; set; }
        public string Producer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string? ImageUrl { get; set; }
        public int GenderId { get; set; }
    }
}
