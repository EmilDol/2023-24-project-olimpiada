using System.ComponentModel.DataAnnotations;

namespace AutoAlert.Core.DTOs.Car
{
    public class VignetteDto
    {
        public Guid Id { get; set; }

        [Required]
        public DateTime DateBought { get; set; }

        [Required]
        public DateTime ExpireDate { get; set; }
    }
}
