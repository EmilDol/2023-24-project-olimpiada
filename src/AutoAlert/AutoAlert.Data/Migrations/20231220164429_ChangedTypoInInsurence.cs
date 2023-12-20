using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoAlert.Data.Migrations
{
    /// <inheritdoc />
    public partial class ChangedTypoInInsurence : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_InshurenceReminders_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.DropTable(
                name: "InshurenceReminders");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                principalTable: "InsurenceReminders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.DropTable(
                name: "InsurenceReminders");

            migrationBuilder.CreateTable(
                name: "InshurenceReminders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InshurenceReminders", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_InshurenceReminders_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                principalTable: "InshurenceReminders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
