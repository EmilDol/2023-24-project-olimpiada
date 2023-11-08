using System.ComponentModel.DataAnnotations;

namespace AutoAlert.Data.Models
{
    public class Region
    {
        public Region()
        {
            Cars = new List<Car>();
        }

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(120)]
        public string Name { get; set; } = null!;

        public List<Car> Cars { get; set; } = null!;
    }
}
