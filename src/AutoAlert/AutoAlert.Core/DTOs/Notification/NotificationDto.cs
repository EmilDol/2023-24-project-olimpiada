namespace AutoAlert.Core.DTOs.Notification
{
    public class NotificationDto
    {
        public Guid Id { get; set; }

        public string Text { get; set; } = null!;

        public string PlateNumber { get; set; } = null!;

        public string Model { get; set; } = null!;

        public string Make { get; set; } = null!;
    }
}
