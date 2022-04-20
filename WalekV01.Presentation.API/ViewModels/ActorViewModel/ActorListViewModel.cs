namespace WalekV01.Presentation.API.ViewModels.ActorViewModel
{
    public class ActorListViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string PlaceOfBirth { get; set; }
        public string ImageUrl { get; set; }
        public int Like { get; set; }
    }
}
