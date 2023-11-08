using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoAlert.Data.Models
{
    public class InshurenceReminder
    {
        [Key]
        public Guid Id { get; set; }

        [InverseProperty(nameof(Models.Car.InshurenceReminder))]
        public Car Car { get; set; } = null!;
    }
}
