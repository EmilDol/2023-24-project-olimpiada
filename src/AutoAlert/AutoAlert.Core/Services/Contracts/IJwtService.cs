using AutoAlert.Data.Models;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace AutoAlert.Core.Services.Contracts
{
    public interface IJwtService
    {
        Task<string> GenerateToken(IConfiguration configuration, ApplicationUser user, UserManager<ApplicationUser> userManager);
    }
}
