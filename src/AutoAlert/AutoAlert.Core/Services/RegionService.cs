using AutoAlert.Core.DTOs.Region;
using AutoAlert.Core.Services.Contracts;
using AutoAlert.Data;

using Microsoft.EntityFrameworkCore;

namespace AutoAlert.Core.Services
{
    public class RegionService : IRegionService
    {
        private readonly ApplicationDbContext context;

        public RegionService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<List<RegionDto>> GetAll()
        {
            var regions = await context.Regions
                .Select(r => new RegionDto
                {
                    Id = r.Id,
                    Name = r.Name,
                })
                .OrderBy(r => r.Name)
                .ToListAsync();

            return regions;
        }
    }
}
