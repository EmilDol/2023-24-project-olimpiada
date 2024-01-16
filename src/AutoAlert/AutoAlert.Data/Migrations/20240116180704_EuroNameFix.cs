using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoAlert.Data.Migrations
{
    /// <inheritdoc />
    public partial class EuroNameFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Euro",
                table: "Cars",
                newName: "EuroType");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EuroType",
                table: "Cars",
                newName: "Euro");
        }
    }
}
