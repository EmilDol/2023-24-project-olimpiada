using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoAlert.Data.Models
{
    public class EngineOilReminder
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string OilType { get; set; } = null!;

        [Required]
        public int MileageOfLastChange { get; set; }

        [Required]
        public int MileageOfNextChange { get; set; }

        [Required]
        public DateTime DateOfLastChange { get; set; }

        [InverseProperty(nameof(Models.Car.EngineOilReminder))]
        public Car Car { get; set; } = null!;
    }
}
