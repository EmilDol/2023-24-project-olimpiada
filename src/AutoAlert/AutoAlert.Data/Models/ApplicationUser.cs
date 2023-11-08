using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using Microsoft.AspNetCore.Identity;

namespace AutoAlert.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            Cars = new List<Car>();
        }

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; } = null!;

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; } = null!;

        [ForeignKey(nameof(Settings))]
        public Guid SettingsId { get; set; }
        public UserSettings Settings { get; set; } = null!;

        public List<Car> Cars { get; set; } = null!;
    }
}
