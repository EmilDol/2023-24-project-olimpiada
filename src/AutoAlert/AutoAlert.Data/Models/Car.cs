using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using AutoAlert.Data.Models.Enums;

namespace AutoAlert.Data.Models
{
    public class Car
    {
        public Car()
        {
            Notifications = new List<Notification>();
        }

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(12)]
        public string PlateNumber { get; set; } = null!;

        [Required]
        [MaxLength(55)]
        public string Model { get; set; } = null!;

        [Required]
        [MaxLength(20)]
        public string Make { get; set; } = null!;

        [Required]
        public int YearOfMake { get; set; }

        [Required]
        public int Mileage { get; set; }

        [Required]
        public int HorsePower { get; set; }

        [Required]
        public EuroType EuroType { get; set; }

        [Required]
        public bool TaxPayed { get; set; }

        [Required]
        public DateTime TechnicalCheckExpirationDate { get; set; }

        [Required]
        [ForeignKey(nameof(Region))]
        public Guid RegionId { get; set; }
        public Region Region { get; set; } = null!;

        [ForeignKey(nameof(EngineOilReminder))]
        public Guid? EngineOilReminderId { get; set; }
        public EngineOilReminder EngineOilReminder { get; set; } = null!;

        [ForeignKey(nameof(TransmitionOilReminder))]
        public Guid? TransmissionOilReminderId { get; set; }
        public TransmitionOilReminder TransmitionOilReminder { get; set; } = null!;

        [ForeignKey(nameof(VignetteReminder))]
        public Guid? VignetteId { get; set; }
        public VignetteReminder VignetteReminder { get; set; } = null!;

        [ForeignKey(nameof(InsurenceReminder))]
        public Guid? InshurenceReminderId { get; set; }
        public InsurenceReminder InsurenceReminder { get; set; } = null!;

        [Required]
        [ForeignKey(nameof(User))]
        public string OwnerId { get; set; } = null!;
        public ApplicationUser User { get; set; } = null!;

        [InverseProperty(nameof(Notification.Car))]
        public List<Notification> Notifications { get; set; } = null!;
    }
}
