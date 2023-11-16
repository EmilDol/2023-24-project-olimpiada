using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoAlert.Data.Migrations
{
    /// <inheritdoc />
    public partial class FixedTableNames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Car_AspNetUsers_OwnerId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Car_EngineOilReminder_EngineOilReminderId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Car_InshurenceReminder_InshurenceReminderId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Car_Region_RegionId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Car_TransmitionOilReminder_TransmissionOilReminderId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Car_VignetteReminder_VignetteId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Notification_AspNetUsers_UserId",
                table: "Notification");

            migrationBuilder.DropForeignKey(
                name: "FK_Notification_Car_CarId",
                table: "Notification");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VignetteReminder",
                table: "VignetteReminder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TransmitionOilReminder",
                table: "TransmitionOilReminder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Region",
                table: "Region");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Notification",
                table: "Notification");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InshurenceReminder",
                table: "InshurenceReminder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EngineOilReminder",
                table: "EngineOilReminder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Car",
                table: "Car");

            migrationBuilder.DropIndex(
                name: "IX_Car_EngineOilReminderId",
                table: "Car");

            migrationBuilder.RenameTable(
                name: "VignetteReminder",
                newName: "VignetteReminders");

            migrationBuilder.RenameTable(
                name: "TransmitionOilReminder",
                newName: "TransmitionOilReminders");

            migrationBuilder.RenameTable(
                name: "Region",
                newName: "Regions");

            migrationBuilder.RenameTable(
                name: "Notification",
                newName: "Notifications");

            migrationBuilder.RenameTable(
                name: "InshurenceReminder",
                newName: "InshurenceReminders");

            migrationBuilder.RenameTable(
                name: "EngineOilReminder",
                newName: "EngineOilReminders");

            migrationBuilder.RenameTable(
                name: "Car",
                newName: "Cars");

            migrationBuilder.RenameIndex(
                name: "IX_Notification_UserId",
                table: "Notifications",
                newName: "IX_Notifications_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Notification_CarId",
                table: "Notifications",
                newName: "IX_Notifications_CarId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_VignetteId",
                table: "Cars",
                newName: "IX_Cars_VignetteId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_TransmissionOilReminderId",
                table: "Cars",
                newName: "IX_Cars_TransmissionOilReminderId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_RegionId",
                table: "Cars",
                newName: "IX_Cars_RegionId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_OwnerId",
                table: "Cars",
                newName: "IX_Cars_OwnerId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_InshurenceReminderId",
                table: "Cars",
                newName: "IX_Cars_InshurenceReminderId");

            migrationBuilder.AlterColumn<Guid>(
                name: "EngineOilReminderId",
                table: "Cars",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_VignetteReminders",
                table: "VignetteReminders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TransmitionOilReminders",
                table: "TransmitionOilReminders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Regions",
                table: "Regions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Notifications",
                table: "Notifications",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InshurenceReminders",
                table: "InshurenceReminders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EngineOilReminders",
                table: "EngineOilReminders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cars",
                table: "Cars",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_EngineOilReminderId",
                table: "Cars",
                column: "EngineOilReminderId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_AspNetUsers_OwnerId",
                table: "Cars",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_EngineOilReminders_EngineOilReminderId",
                table: "Cars",
                column: "EngineOilReminderId",
                principalTable: "EngineOilReminders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_InshurenceReminders_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                principalTable: "InshurenceReminders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_Regions_RegionId",
                table: "Cars",
                column: "RegionId",
                principalTable: "Regions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_TransmitionOilReminders_TransmissionOilReminderId",
                table: "Cars",
                column: "TransmissionOilReminderId",
                principalTable: "TransmitionOilReminders",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_VignetteReminders_VignetteId",
                table: "Cars",
                column: "VignetteId",
                principalTable: "VignetteReminders",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_AspNetUsers_UserId",
                table: "Notifications",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_Cars_CarId",
                table: "Notifications",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_AspNetUsers_OwnerId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_EngineOilReminders_EngineOilReminderId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_InshurenceReminders_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_Regions_RegionId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_TransmitionOilReminders_TransmissionOilReminderId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_VignetteReminders_VignetteId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_AspNetUsers_UserId",
                table: "Notifications");

            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_Cars_CarId",
                table: "Notifications");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VignetteReminders",
                table: "VignetteReminders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TransmitionOilReminders",
                table: "TransmitionOilReminders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Regions",
                table: "Regions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Notifications",
                table: "Notifications");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InshurenceReminders",
                table: "InshurenceReminders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EngineOilReminders",
                table: "EngineOilReminders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cars",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_EngineOilReminderId",
                table: "Cars");

            migrationBuilder.RenameTable(
                name: "VignetteReminders",
                newName: "VignetteReminder");

            migrationBuilder.RenameTable(
                name: "TransmitionOilReminders",
                newName: "TransmitionOilReminder");

            migrationBuilder.RenameTable(
                name: "Regions",
                newName: "Region");

            migrationBuilder.RenameTable(
                name: "Notifications",
                newName: "Notification");

            migrationBuilder.RenameTable(
                name: "InshurenceReminders",
                newName: "InshurenceReminder");

            migrationBuilder.RenameTable(
                name: "EngineOilReminders",
                newName: "EngineOilReminder");

            migrationBuilder.RenameTable(
                name: "Cars",
                newName: "Car");

            migrationBuilder.RenameIndex(
                name: "IX_Notifications_UserId",
                table: "Notification",
                newName: "IX_Notification_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Notifications_CarId",
                table: "Notification",
                newName: "IX_Notification_CarId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_VignetteId",
                table: "Car",
                newName: "IX_Car_VignetteId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_TransmissionOilReminderId",
                table: "Car",
                newName: "IX_Car_TransmissionOilReminderId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_RegionId",
                table: "Car",
                newName: "IX_Car_RegionId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_OwnerId",
                table: "Car",
                newName: "IX_Car_OwnerId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_InshurenceReminderId",
                table: "Car",
                newName: "IX_Car_InshurenceReminderId");

            migrationBuilder.AlterColumn<Guid>(
                name: "EngineOilReminderId",
                table: "Car",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VignetteReminder",
                table: "VignetteReminder",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TransmitionOilReminder",
                table: "TransmitionOilReminder",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Region",
                table: "Region",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Notification",
                table: "Notification",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InshurenceReminder",
                table: "InshurenceReminder",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EngineOilReminder",
                table: "EngineOilReminder",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Car",
                table: "Car",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Car_EngineOilReminderId",
                table: "Car",
                column: "EngineOilReminderId",
                unique: true,
                filter: "[EngineOilReminderId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_AspNetUsers_OwnerId",
                table: "Car",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Car_EngineOilReminder_EngineOilReminderId",
                table: "Car",
                column: "EngineOilReminderId",
                principalTable: "EngineOilReminder",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_InshurenceReminder_InshurenceReminderId",
                table: "Car",
                column: "InshurenceReminderId",
                principalTable: "InshurenceReminder",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Car_Region_RegionId",
                table: "Car",
                column: "RegionId",
                principalTable: "Region",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Car_TransmitionOilReminder_TransmissionOilReminderId",
                table: "Car",
                column: "TransmissionOilReminderId",
                principalTable: "TransmitionOilReminder",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_VignetteReminder_VignetteId",
                table: "Car",
                column: "VignetteId",
                principalTable: "VignetteReminder",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_AspNetUsers_UserId",
                table: "Notification",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_Car_CarId",
                table: "Notification",
                column: "CarId",
                principalTable: "Car",
                principalColumn: "Id");
        }
    }
}
