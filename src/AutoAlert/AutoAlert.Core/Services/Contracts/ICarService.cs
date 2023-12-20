using AutoAlert.Core.DTOs.Car;

namespace AutoAlert.Core.Services.Contracts
{
    public interface ICarService
    {
        Task<bool> Create(CarCreateDto car, string userId);
    }
}
