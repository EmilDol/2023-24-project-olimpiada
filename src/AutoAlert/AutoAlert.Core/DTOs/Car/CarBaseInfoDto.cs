namespace AutoAlert.Core.DTOs.Car
{
    public class CarBaseInfoDto
    {
        public Guid Id { get; set; }

        public string Model { get; set; } = null!;

        public string Make { get; set; } = null!;

        public string PlateNumber { get; set; } = null!;
    }
}
