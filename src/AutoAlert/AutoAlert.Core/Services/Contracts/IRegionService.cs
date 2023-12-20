using AutoAlert.Core.DTOs.Region;

namespace AutoAlert.Core.Services.Contracts
{
    public interface IRegionService
    {
        Task<List<RegionDto>> GetAll();
    }
}
