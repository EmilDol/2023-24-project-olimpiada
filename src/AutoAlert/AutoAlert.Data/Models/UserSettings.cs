using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoAlert.Data.Models
{
    [Table("UserSettings")]
    public class UserSettings
    {
        [Key]
        public Guid Id { get; set; }

        public bool EmailReminders { get; set; }

        //Brakes, wipers, coolant
        public bool GlobalReminders { get; set; }

        [InverseProperty(nameof(ApplicationUser.Settings))]
        public ApplicationUser User { get; set; } = null!;
    }
}
