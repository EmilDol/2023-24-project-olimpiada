using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoAlert.Data.Models
{
    public class InsurenceReminder
    {
        [Key]
        public Guid Id { get; set; }

        [InverseProperty(nameof(Models.Car.InsurenceReminder))]
        public Car Car { get; set; } = null!;
    }
}
