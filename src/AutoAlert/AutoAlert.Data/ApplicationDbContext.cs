using AutoAlert.Data.Models;

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AutoAlert.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }

        public DbSet<EngineOilReminder> EngineOilReminders { get; set; }

        public DbSet<TransmitionOilReminder> TransmitionOilReminders { get; set; }

        public DbSet<InsurenceReminder> InsurenceReminders { get; set; }

        public DbSet<Notification> Notifications { get; set; }

        public DbSet<Region> Regions { get; set; }

        public DbSet<UserSettings> UserSettings { get; set; }

        public DbSet<VignetteReminder> VignetteReminders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Notification>()
                .HasOne(c => c.Car)
                .WithMany(c => c.Notifications)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}