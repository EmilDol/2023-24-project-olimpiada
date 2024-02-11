using AutoAlert.Data.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AutoAlert.Data.Configurations
{
    internal class RegionConfiguration : IEntityTypeConfiguration<Region>
    {
        public void Configure(EntityTypeBuilder<Region> builder)
        {
            List<Region> regions = new List<Region>
            {
                new Region
                {
                    Id = Guid.Parse("3295e68f-519c-4110-947d-10020365b95c"),
                    Name = "Sliven"
                },
                new Region
                {
                    Id = Guid.Parse("2219d8e0-579c-4110-945d-10120365b95c"),
                    Name = "Ruse"
                },
                new Region
                {
                    Id = Guid.Parse("3195e68b-519c-4110-946d-10120365b95c"),
                    Name = "Smolyan"
                },
                new Region
                {
                    Id = Guid.Parse("1c19d8f0-57ac-4110-944d-10220365b95c"), 
                    Name = "Pernik" 
                },
                new Region
                {
                    Id = Guid.Parse("2d19d8e2-57bc-4110-943d-10320365b95c"), 
                    Name = "Targovishte" 
                },
                new Region
                {
                    Id = Guid.Parse("22cb1119-9934-4230-b0a0-1faf04b6f95c"),
                    Name = "Burgas" 
                },
                new Region
                {
                    Id = Guid.Parse("01faf0e4-174f-4750-807d-22f60e3a1a5c"),
                    Name = "Sofia"
                },
                new Region
                {
                    Id = Guid.Parse("11faf812-1791-4750-808d-22f60e3a1a5c"),
                    Name = "Kardzhali" 
                },
                new Region
                {
                    Id = Guid.Parse("14faf3c8-1791-4750-808d-22f60e3a1a5c"),
                    Name = "Varna" 
                },
                new Region
                {
                    Id = Guid.Parse("12faf5c0-1791-4750-809d-22f60e3a1a5c"), 
                    Name = "Stara Zagora" 
                },
                new Region
                {
                    Id = Guid.Parse("02b3d7c8-57ad-4038-bc66-4293e254b56c"),
                    Name = "Haskovo" 
                },
                new Region 
                {
                    Id = Guid.Parse("05fafe08-1c4f-42a0-aa6d-52b8faf7aa5c"),
                    Name = "Pazardzhik" 
                },
                new Region 
                {
                    Id = Guid.Parse("10faf664-238f-4100-9531-55b8faf3895c"), 
                    Name = "Pleven" 
                },
                new Region 
                {
                    Id = Guid.Parse("00faf4b0-5c38-4720-98e3-714805b16a5c"), 
                    Name = "Kyustendil" 
                },
                new Region 
                {
                    Id = Guid.Parse("23d1a252-593c-4b50-9141-77faf6604a5c"), 
                    Name = "Razgrad" 
                },
                new Region 
                {
                    Id = Guid.Parse("03d1a262-594c-4b50-9151-78faf6604a5c"),
                    Name = "Montana"
                },
                new Region 
                {
                    Id = Guid.Parse("26d1a242-594c-4b50-9131-79faf6604a5c"), 
                    Name = "Silistra" 
                },
                new Region
                {
                    Id = Guid.Parse("4e27b2d5-7954-4610-b8fd-8143614c778d"),
                    Name = "Blagoevgrad" 
                },
                new Region
                {
                    Id = Guid.Parse("04059520-78d2-4456-9364-90e1d1d3465c"),
                    Name = "Gabrovo"
                },
                new Region 
                {
                    Id = Guid.Parse("2456e699-5173-4094-a749-91614e160a5c"),
                    Name = "Lovech"
                },
                new Region
                {
                    Id = Guid.Parse("3395e693-5193-4084-a769-91714e160a5c"),
                    Name = "Shumen"
                },
                new Region
                {
                    Id = Guid.Parse("3495e697-5193-4084-a779-91714e160a5c"),
                    Name = "Plovdiv"
                },
                new Region
                {
                    Id = Guid.Parse("0afaf1f8-1a8f-40e0-b191-d605faf126cb"),
                    Name = "Sofia-Grad" },
                new Region
                {
                    Id = Guid.Parse("0858a1f7-1a09-40e0-b1b1-d605faf126cb"),
                    Name = "Dobrich"
                },
                new Region
                {
                    Id = Guid.Parse("cf3f3ba8-6459-41c5-8bf5-49992f623c77"),
                    Name = "Veliko Tarnovo"
                }
            };
            builder.HasData(regions);
        }
    }
}
