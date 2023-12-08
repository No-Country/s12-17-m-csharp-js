using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ecommeceBack.API.Migrations
{
    /// <inheritdoc />
    public partial class merge : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductoId",
                table: "Imagenes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Imagenes_ProductoId",
                table: "Imagenes",
                column: "ProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Imagenes_Productos_ProductoId",
                table: "Imagenes",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Imagenes_Productos_ProductoId",
                table: "Imagenes");

            migrationBuilder.DropIndex(
                name: "IX_Imagenes_ProductoId",
                table: "Imagenes");

            migrationBuilder.DropColumn(
                name: "ProductoId",
                table: "Imagenes");
        }
    }
}
