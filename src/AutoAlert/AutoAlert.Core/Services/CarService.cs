using AutoAlert.Core.DTOs.Car;
using AutoAlert.Core.Services.Contracts;
using AutoAlert.Data;
using AutoAlert.Data.Models;

using Microsoft.EntityFrameworkCore;

namespace AutoAlert.Core.Services
{
    public class CarService : ICarService
    {
        private readonly ApplicationDbContext context;

        public CarService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<bool> Create(CarDto car, string userId)
        {
            var carNew = new Car
            {
                OwnerId = userId,
                EuroType = car.EuroType,
                HorsePower = car.HorsePower,
                Make = car.Make,
                Mileage = car.Mileage,
                Model = car.Model,
                PlateNumber = car.PlateNumber,
                RegionId = car.RegionId,
                TaxPayed = car.TaxPayed,
                TechnicalCheckExpirationDate = car.TechnicalCheckExpirationDate,
                YearOfMake = car.YearOfMake,
                EngineOilReminder = new EngineOilReminder
                {
                    DateOfLastChange = car.EngineOil.DateOfLastChange,
                    OilType = car.EngineOil.OilType,
                    MileageOfLastChange = car.EngineOil.MileageOfLastChange,
                    MileageOfNextChange = car.EngineOil.MileageOfNextChange
                },
                TransmitionOilReminder = new TransmitionOilReminder
                {
                    DateOfLastChange = car.TransmitionOil.DateOfLastChange,
                    OilType = car.TransmitionOil.OilType,
                    MileageOfLastChange = car.TransmitionOil.MileageOfLastChange,
                    MileageOfNextChange = car.TransmitionOil.MileageOfNextChange
                },
                InsurenceReminder = new InsurenceReminder
                {

                },
                VignetteReminder = new VignetteReminder
                {
                    DateBought = car.Vignette.DateBought,
                    ExpireDate = car.Vignette.ExpireDate
                }
            };
            try
            {
                await context.Cars.AddAsync(carNew);
                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }

            return true;
        }

        public async Task<List<CarBaseInfoDto>> GetAll(string userId)
        {
            var cars = await context.Cars
                .Where(c => c.OwnerId == userId)
                .Select(c => new CarBaseInfoDto
                {
                    Id = c.Id,
                    Make = c.Make,
                    Model = c.Model,
                    PlateNumber = c.PlateNumber
                })
                .ToListAsync();

            return cars;
        }

        public async Task<CarDto> GetById(string userId, Guid carId)
        {
            var car = await context.Cars
                .Where(c => c.OwnerId == userId)
                .Include(c => c.EngineOilReminder)
                .Include(c => c.TransmitionOilReminder)
                .Include(c => c.InshurenceReminderId)
                .Include(c => c.VignetteReminder)
                .Include(c => c.Region)
                .Select(c => new CarDto
                {
                    Id = c.Id,
                    Make = c.Make,
                    Model = c.Model,
                    PlateNumber = c.PlateNumber,
                    EuroType = c.EuroType,
                    HorsePower = c.HorsePower,
                    Mileage = c.Mileage,
                    TaxPayed = c.TaxPayed,
                    TechnicalCheckExpirationDate = c.TechnicalCheckExpirationDate,
                    YearOfMake = c.YearOfMake,
                    EngineOil = new EngineOilDto
                    {
                        DateOfLastChange = c.EngineOilReminder.DateOfLastChange,
                        MileageOfLastChange = c.EngineOilReminder.MileageOfLastChange,
                        MileageOfNextChange = c.EngineOilReminder.MileageOfNextChange,
                        OilType = c.EngineOilReminder.OilType,
                        Id = c.EngineOilReminder.Id
                    },
                    Insurance = new InsuranceDto(),
                    TransmitionOil = new TransmitionOilDto
                    {
                        DateOfLastChange = c.TransmitionOilReminder.DateOfLastChange,
                        MileageOfLastChange = c.TransmitionOilReminder.MileageOfLastChange,
                        MileageOfNextChange = c.TransmitionOilReminder.MileageOfNextChange,
                        OilType = c.TransmitionOilReminder.OilType,
                        Id = c.TransmitionOilReminder.Id
                    },
                    Vignette = new VignetteDto
                    {
                        ExpireDate = c.VignetteReminder.ExpireDate,
                        DateBought = c.VignetteReminder.DateBought,
                        Id = c.VignetteReminder.Id,
                    },
                    Region = c.Region.Name
                })
                .FirstOrDefaultAsync(c => c.Id == carId);

            return car;
        }
    }
}
