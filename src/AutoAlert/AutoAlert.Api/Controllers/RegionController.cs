using AutoAlert.Core.DTOs.Region;
using AutoAlert.Core.Services.Contracts;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AutoAlert.Api.Controllers
{
    [Route("api/region")]
    [Authorize]
    public class RegionController : Controller
    {
        private readonly IRegionService regionService;

        public RegionController(IRegionService regionService)
        {
            this.regionService = regionService;
        }

        [HttpGet("getall")]
        public async Task<ActionResult<List<RegionDto>>> GetAll()
        {
            var regions = await regionService.GetAll();

            return regions;
        }
    }
}
