using AutoAlert.Data;
using AutoAlert.Data.Models;
using AutoAlert.Data.Models.Enums;

using Microsoft.EntityFrameworkCore;

using Quartz;

namespace AutoAlert.Core.QuartzJobs
{
    public class NotificationCreationJob : IJob
    {
        private readonly ApplicationDbContext Dbcontext;

        public NotificationCreationJob(ApplicationDbContext context)
        {
            Dbcontext = context;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var today = DateTime.UtcNow;
            var beforeOneYear = today.AddYears(-1);

            var engineOils = await Dbcontext.EngineOilReminders
                .Include(c => c.Car)
                .Where(e => e.DateOfLastChange <= beforeOneYear)
                .ToListAsync();

            var notifications = new List<Notification>();
            foreach (var item in engineOils)
            {
                if (await Dbcontext.Notifications.AnyAsync(n => n.CarId == item.Car.Id && n.NotificationType == NotificationType.EngineOil))
                {
                    continue;
                }
                notifications.Add(new Notification
                {
                    CarId = item.Car.Id,
                    NotificationType = NotificationType.EngineOil,
                    Message = "Change your engine oil"
                });
            }

            var transmissionOils = await Dbcontext.TransmitionOilReminders
                .Include(c => c.Car)
                .Where(t => t.DateOfLastChange <= beforeOneYear)
                .ToListAsync();

            foreach (var item in engineOils)
            {
                if (await Dbcontext.Notifications.AnyAsync(n => n.CarId == item.Car.Id && n.NotificationType == NotificationType.TransmissionOil))
                {
                    continue;
                }
                notifications.Add(new Notification
                {
                    CarId = item.Car.Id,
                    NotificationType = NotificationType.TransmissionOil,
                    Message = "Change your transmission oil"
                });
            }

            var vignettes = await Dbcontext.VignetteReminders
                .Include(c => c.Car)
                .Where(v => v.ExpireDate >= today)
                .ToListAsync();

            foreach (var item in engineOils)
            {
                if (await Dbcontext.Notifications.AnyAsync(n => n.CarId == item.Car.Id && n.NotificationType == NotificationType.TransmissionOil))
                {
                    continue;
                }
                notifications.Add(new Notification
                {
                    CarId = item.Car.Id,
                    NotificationType = NotificationType.Vignette,
                    Message = "Your vignette ended"
                });
            }

            await Dbcontext.Notifications.AddRangeAsync(notifications);
            await Dbcontext.SaveChangesAsync();
        }
    }
}
