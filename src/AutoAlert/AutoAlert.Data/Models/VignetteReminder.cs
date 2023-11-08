using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoAlert.Data.Models
{
    public class VignetteReminder
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public DateTime DateBought { get; set; }

        [Required]
        public DateTime ExpireDate { get; set; }

        [InverseProperty(nameof(Models.Car.VignetteReminder))]
        public Car Car { get; set; } = null!;
    }
}
