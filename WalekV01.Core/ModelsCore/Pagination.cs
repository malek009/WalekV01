

namespace WalekV01.Core.ModelsCore
{
    public class Pagination<T>
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public int TotalItem { get; set; }
        public int TotalNumberPage { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
