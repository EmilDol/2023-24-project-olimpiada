using AutoAlert.Core.DTOs.Car;

namespace AutoAlert.Core.Services.Contracts
{
    public interface ICarService
    {
        Task<bool> Create(CarDto car, string userId);

        Task<List<CarBaseInfoDto>> GetAll(string userId);

        Task<CarDto> GetById(string userId, Guid carId);

        Task<bool> CheckOwnership(Guid carId, string userId);

        Task<bool> Delete(Guid id);

        Task<bool> Update(CarDto car);

        Task<bool> AddVignette(Guid id, VignetteDto vignette);

        Task<bool> AddInsurance(Guid id, InsuranceDto insurance);
    }
}
