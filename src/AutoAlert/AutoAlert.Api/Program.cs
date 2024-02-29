using System.Text;

using AutoAlert.Core.QuartzJobs;
using AutoAlert.Core.Services;
using AutoAlert.Core.Services.Contracts;
using AutoAlert.Data;
using AutoAlert.Data.Models;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

using Quartz;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(
                options => options.UseSqlServer(connectionString));

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireDigit = true;
                options.SignIn.RequireConfirmedAccount = true;
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();

builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetValue<string>("JwtBearerThings:Key")))
                };
            });

builder.Services.AddCors(p => p.AddPolicy("Angular", b => b
                //.WithOrigins("http://localhost:4200")
                .SetIsOriginAllowed((host) => true)
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()));

builder.Services.AddQuartz(qz =>
{
    qz.UseMicrosoftDependencyInjectionJobFactory();
    var jobKey = new JobKey("NotificationCreationJob");
    qz.AddJob<NotificationCreationJob>(opts =>
    {
        opts.WithIdentity(jobKey);
    });

    qz.AddTrigger(opts => opts
        .ForJob(jobKey)
        .WithIdentity("NotificationCreationJob-trigger")
        .StartNow()
        .WithSimpleSchedule(x => x.WithIntervalInHours(24))
    );
});
builder.Services.AddQuartzHostedService(qz => qz.WaitForJobsToComplete = true);

builder.Services.AddScoped<IMailService, MailService>();
builder.Services.AddScoped<IJwtService, JwtService>();
builder.Services.AddScoped<ICarService, CarService>();
builder.Services.AddScoped<IRegionService, RegionService>();
builder.Services.AddScoped<INotificationService, NotificationService>();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Angular");

app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
