using AutoAlert.Core.DTOs.Accout;
using AutoAlert.Core.Services.Contracts;
using AutoAlert.Data;
using AutoAlert.Data.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AutoAlert.Api.Controllers
{
    [ApiController]
    [Route("api/users")]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly IMailService mailService;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration configuration;
        private readonly IJwtService jwtService;
        private readonly ApplicationDbContext context;

        public AuthController(IMailService mailService, UserManager<ApplicationUser> userManager, IConfiguration configuration, IJwtService jwtService, ApplicationDbContext context)
        {
            this.mailService = mailService;
            this.userManager = userManager;
            this.configuration = configuration;
            this.jwtService = jwtService;
            this.context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(registerDto);
            }

            var guid = Guid.NewGuid();
            var settings = new UserSettings
            {
                Id = guid,
                EmailReminders = true,
                GlobalReminders = true,
            };

            await context.UserSettings.AddAsync(settings);
            await context.SaveChangesAsync();

            var user = new ApplicationUser
            {
                UserName = registerDto.FirstName + registerDto.LastName,
                Email = registerDto.Email,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                SettingsId = guid
            };
            var result = await userManager.CreateAsync(user, registerDto.Password);
            if (result.Succeeded)
            {
                //await mailService.SendMail(user.Email, $"Registration - You have successfully registered!");

                return Ok();
            }

            return BadRequest(result.Errors);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto request)
        {

            var user = await userManager.FindByEmailAsync(request.Email);

            if (user == null)
            {
                return NotFound();
            }

            var result = await userManager.CheckPasswordAsync(user, request.Password);

            if (!user.EmailConfirmed && !user.PhoneNumberConfirmed)
            {
                return Forbid();
            }

            if (result)
            {
                string token = await jwtService.GenerateToken(configuration, user, userManager);

                return Ok(new { Token = token });
            }
            else
            {
                return BadRequest("User login failed.");
            }
        }
    }
}
