namespace WalekV01.Presentation.API.ViewModels.UserViewModel
{
    public class ConnectedUser
    {
        public UserData UserData { get; set; }
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
