using System.Security.Claims;

using AutoAlert.Core.DTOs.Car;
using AutoAlert.Core.Services.Contracts;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace AutoAlert.Api.Controllers
{
    [Route("api/car")]
    [Authorize]
    public class CarController : Controller
    {
        private readonly ICarService carService;

        public CarController(ICarService carService)
        {
            this.carService = carService;
        }

        [HttpPost("create")]
        public async Task<ActionResult> Create(CarCreateDto car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            var success = await carService.Create(car, userId);

            if (success)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
