using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AutoAlert.Data.Migrations
{
    /// <inheritdoc />
    public partial class SeededRegions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EngineOilReminders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    OilType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    MileageOfLastChange = table.Column<int>(type: "int", nullable: false),
                    MileageOfNextChange = table.Column<int>(type: "int", nullable: false),
                    DateOfLastChange = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EngineOilReminders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InsurenceReminders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InsurenceReminders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Regions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(120)", maxLength: 120, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Regions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TransmitionOilReminders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    OilType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    MileageOfLastChange = table.Column<int>(type: "int", nullable: false),
                    MileageOfNextChange = table.Column<int>(type: "int", nullable: false),
                    DateOfLastChange = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransmitionOilReminders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserSettings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EmailReminders = table.Column<bool>(type: "bit", nullable: false),
                    GlobalReminders = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSettings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VignetteReminders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DateBought = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExpireDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VignetteReminders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    SettingsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_UserSettings_SettingsId",
                        column: x => x.SettingsId,
                        principalTable: "UserSettings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PlateNumber = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    Model = table.Column<string>(type: "nvarchar(55)", maxLength: 55, nullable: false),
                    Make = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    YearOfMake = table.Column<int>(type: "int", nullable: false),
                    Mileage = table.Column<int>(type: "int", nullable: false),
                    HorsePower = table.Column<int>(type: "int", nullable: false),
                    EuroType = table.Column<int>(type: "int", nullable: false),
                    TaxPayed = table.Column<bool>(type: "bit", nullable: false),
                    TechnicalCheckExpirationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RegionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EngineOilReminderId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TransmissionOilReminderId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    VignetteId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    InshurenceReminderId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    OwnerId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cars_AspNetUsers_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cars_EngineOilReminders_EngineOilReminderId",
                        column: x => x.EngineOilReminderId,
                        principalTable: "EngineOilReminders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                        column: x => x.InshurenceReminderId,
                        principalTable: "InsurenceReminders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cars_Regions_RegionId",
                        column: x => x.RegionId,
                        principalTable: "Regions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cars_TransmitionOilReminders_TransmissionOilReminderId",
                        column: x => x.TransmissionOilReminderId,
                        principalTable: "TransmitionOilReminders",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Cars_VignetteReminders_VignetteId",
                        column: x => x.VignetteId,
                        principalTable: "VignetteReminders",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CarId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notifications_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Notifications_Cars_CarId",
                        column: x => x.CarId,
                        principalTable: "Cars",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Regions",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("00faf4b0-5c38-4720-98e3-714805b16a5c"), "Kyustendil" },
                    { new Guid("01faf0e4-174f-4750-807d-22f60e3a1a5c"), "Sofia" },
                    { new Guid("02b3d7c8-57ad-4038-bc66-4293e254b56c"), "Haskovo" },
                    { new Guid("03d1a262-594c-4b50-9151-78faf6604a5c"), "Montana" },
                    { new Guid("04059520-78d2-4456-9364-90e1d1d3465c"), "Gabrovo" },
                    { new Guid("05fafe08-1c4f-42a0-aa6d-52b8faf7aa5c"), "Pazardzhik" },
                    { new Guid("0858a1f7-1a09-40e0-b1b1-d605faf126cb"), "Dobrich" },
                    { new Guid("0afaf1f8-1a8f-40e0-b191-d605faf126cb"), "Sofia-Grad" },
                    { new Guid("10faf664-238f-4100-9531-55b8faf3895c"), "Pleven" },
                    { new Guid("11faf812-1791-4750-808d-22f60e3a1a5c"), "Kardzhali" },
                    { new Guid("12faf5c0-1791-4750-809d-22f60e3a1a5c"), "Stara Zagora" },
                    { new Guid("14faf3c8-1791-4750-808d-22f60e3a1a5c"), "Varna" },
                    { new Guid("1c19d8f0-57ac-4110-944d-10220365b95c"), "Pernik" },
                    { new Guid("2219d8e0-579c-4110-945d-10120365b95c"), "Ruse" },
                    { new Guid("22cb1119-9934-4230-b0a0-1faf04b6f95c"), "Burgas" },
                    { new Guid("23d1a252-593c-4b50-9141-77faf6604a5c"), "Razgrad" },
                    { new Guid("2456e699-5173-4094-a749-91614e160a5c"), "Lovech" },
                    { new Guid("26d1a242-594c-4b50-9131-79faf6604a5c"), "Silistra" },
                    { new Guid("2d19d8e2-57bc-4110-943d-10320365b95c"), "Targovishte" },
                    { new Guid("3195e68b-519c-4110-946d-10120365b95c"), "Smolyan" },
                    { new Guid("3295e68f-519c-4110-947d-10020365b95c"), "Sliven" },
                    { new Guid("3395e693-5193-4084-a769-91714e160a5c"), "Shumen" },
                    { new Guid("3495e697-5193-4084-a779-91714e160a5c"), "Plovdiv" },
                    { new Guid("4e27b2d5-7954-4610-b8fd-8143614c778d"), "Blagoevgrad" },
                    { new Guid("cf3f3ba8-6459-41c5-8bf5-49992f623c77"), "Veliko Tarnovo" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_SettingsId",
                table: "AspNetUsers",
                column: "SettingsId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_EngineOilReminderId",
                table: "Cars",
                column: "EngineOilReminderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cars_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cars_OwnerId",
                table: "Cars",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_RegionId",
                table: "Cars",
                column: "RegionId");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_TransmissionOilReminderId",
                table: "Cars",
                column: "TransmissionOilReminderId",
                unique: true,
                filter: "[TransmissionOilReminderId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_VignetteId",
                table: "Cars",
                column: "VignetteId",
                unique: true,
                filter: "[VignetteId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Notifications_CarId",
                table: "Notifications",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_Notifications_UserId",
                table: "Notifications",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "EngineOilReminders");

            migrationBuilder.DropTable(
                name: "InsurenceReminders");

            migrationBuilder.DropTable(
                name: "Regions");

            migrationBuilder.DropTable(
                name: "TransmitionOilReminders");

            migrationBuilder.DropTable(
                name: "VignetteReminders");

            migrationBuilder.DropTable(
                name: "UserSettings");
        }
    }
}
