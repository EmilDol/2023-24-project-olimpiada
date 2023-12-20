using AutoAlert.Core.DTOs.Car;
using AutoAlert.Core.Services.Contracts;
using AutoAlert.Data;
using AutoAlert.Data.Models;

namespace AutoAlert.Core.Services
{
    public class CarService : ICarService
    {
        private readonly ApplicationDbContext context;

        public CarService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<bool> Create(CarCreateDto car, string userId)
        {
            var carNew = new Car
            {
                OwnerId = userId,
                Euro = car.Euro,
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
    }
}
