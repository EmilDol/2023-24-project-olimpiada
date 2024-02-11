using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoAlert.Data.Migrations
{
    /// <inheritdoc />
    public partial class nownullableinsurence : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.AlterColumn<Guid>(
                name: "InshurenceReminderId",
                table: "Cars",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                unique: true,
                filter: "[InshurenceReminderId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                principalTable: "InsurenceReminders",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_InshurenceReminderId",
                table: "Cars");

            migrationBuilder.AlterColumn<Guid>(
                name: "InshurenceReminderId",
                table: "Cars",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cars_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_InsurenceReminders_InshurenceReminderId",
                table: "Cars",
                column: "InshurenceReminderId",
                principalTable: "InsurenceReminders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
