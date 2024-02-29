using AutoAlert.Core.DTOs.Notification;
using AutoAlert.Core.Services.Contracts;
using AutoAlert.Data;

using Microsoft.EntityFrameworkCore;

namespace AutoAlert.Core.Services
{
    public class NotificationService : INotificationService
    {
        private readonly ApplicationDbContext _context;

        public NotificationService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> CheckOwnership(Guid id, string userId)
        {
            var notification = await _context.Notifications
                .Include(n => n.Car)
                .Select(n => new
                {
                    Id = n.Id,
                    UserId = n.Car.OwnerId
                })
                .FirstOrDefaultAsync(n => n.Id == id);

            return notification.UserId == userId;
        }

        public async Task<bool> Delete(Guid id)
        {
            var notification = await _context.Notifications
                .FindAsync(id);

            try
            {
                _context.Notifications.Remove(notification);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<List<NotificationDto>> GetAll(string userId)
        {
            var notifications = await _context.Notifications
                .Include(n => n.Car)
                .Where(n => n.Car.OwnerId == userId)
                .Select(n => new NotificationDto
                {
                    Id = n.Id,
                    Text = n.Message,
                    Make = n.Car.Make,
                    Model = n.Car.Model,
                    PlateNumber = n.Car.PlateNumber
                })
                .ToListAsync();

            return notifications;
        }
    }
}
