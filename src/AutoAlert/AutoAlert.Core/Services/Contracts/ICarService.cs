using AutoAlert.Core.DTOs.Car;

namespace AutoAlert.Core.Services.Contracts
{
    public interface ICarService
    {
        Task<bool> Create(CarDto car, string userId);

        Task<List<CarBaseInfoDto>> GetAll(string userId);

        Task<CarDto> GetById(string userId, Guid carId);
    }
}
