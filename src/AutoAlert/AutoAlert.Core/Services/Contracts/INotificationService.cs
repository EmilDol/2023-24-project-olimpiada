using AutoAlert.Core.DTOs.Notification;

namespace AutoAlert.Core.Services.Contracts
{
    public interface INotificationService
    {
        Task<bool> CheckOwnership(Guid id, string userId);
        Task<bool> Delete(Guid id);
        Task<List<NotificationDto>> GetAll(string userId);
    }
}
