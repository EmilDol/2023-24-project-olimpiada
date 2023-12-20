using System.ComponentModel.DataAnnotations;

using AutoAlert.Data.Models.Enums;

namespace AutoAlert.Core.DTOs.Car
{
    public class CarCreateDto
    {
        public Guid Id { get; set; }

        [Required]
        [MinLength(4)]
        [MaxLength(12)]
        public string PlateNumber { get; set; } = null!;

        [Required]
        [MinLength(1)]
        [MaxLength(55)]
        public string Model { get; set; } = null!;

        [Required]
        [MinLength(1)]
        [MaxLength(20)]
        public string Make { get; set; } = null!;

        [Required]
        public int YearOfMake { get; set; }

        [Required]
        public int Mileage { get; set; }

        [Required]
        public int HorsePower { get; set; }

        [Required]
        public EuroType Euro { get; set; }

        [Required]
        public bool TaxPayed { get; set; }

        [Required]
        public DateTime TechnicalCheckExpirationDate { get; set; }

        [Required]
        public Guid RegionId { get; set; }

        [Required]
        public EngineOilCreateDto EngineOil { get; set; } = null!;

        [Required]
        public TransmitionOilCreateDto TransmitionOil { get; set; } = null!;

        public VignetteCreateDto? Vignette { get; set; }

        public InsuranceCreateDto? Insurance { get; set; }

    }
}
