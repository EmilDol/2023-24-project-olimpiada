using System.ComponentModel.DataAnnotations;

namespace AutoAlert.Core.DTOs.Car
{
    public class EngineOilDto
    {
        public Guid Id { get; set; }

        [Required]
        [MinLength(4)]
        [MaxLength(20)]
        public string OilType { get; set; } = null!;

        [Required]
        public int MileageOfLastChange { get; set; }

        [Required]
        public int MileageOfNextChange { get; set; }

        [Required]
        public DateTime DateOfLastChange { get; set; }
    }
}
