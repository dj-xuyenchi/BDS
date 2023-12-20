namespace Core
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DateTime now = DateTime.Now;

            // Thời điểm bạn muốn so sánh (ví dụ: 2023-01-01)
            DateTime targetDate = new DateTime(2024, 1, 1);

            // Tính số ngày giữa thời điểm hiện tại và targetDate
            TimeSpan difference = targetDate - now;

            // Lấy giá trị tuyệt đối của số ngày để tránh giá trị âm nếu targetDate là trong quá khứ
            int daysDifference = Math.Abs(difference.Days);

            Console.WriteLine($"Số ngày giữa {now} và {targetDate} là {daysDifference} ngày.");
        }
    }
}