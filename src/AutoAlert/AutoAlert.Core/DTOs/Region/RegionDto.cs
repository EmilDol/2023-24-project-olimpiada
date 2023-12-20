using System.ComponentModel.DataAnnotations;

namespace AutoAlert.Core.DTOs.Region
{
    public class RegionDto
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        [MinLength(3)]
        [MaxLength(100)]
        public string Name { get; set; } = null!;
    }
}
