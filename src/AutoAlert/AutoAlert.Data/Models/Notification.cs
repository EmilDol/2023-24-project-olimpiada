using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using AutoAlert.Data.Models.Enums;

namespace AutoAlert.Data.Models
{
    public class Notification
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Message { get; set; } = null!;

        [Required]
        public NotificationType NotificationType { get; set; }

        [Required]
        [ForeignKey(nameof(Car))]
        public Guid CarId { get; set; }
        public Car Car { get; set; } = null!;
    }
}
