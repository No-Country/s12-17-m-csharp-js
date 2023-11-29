using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ecommeceBack.API.Migrations
{
    /// <inheritdoc />
    public partial class entidadDatos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DatosId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Datos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    Apellido = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    Direccion = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    Provincia = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    Ciudad = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    DNI = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: false),
                    Direccion_Entrega = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Datos", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_DatosId",
                table: "AspNetUsers",
                column: "DatosId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Datos_DatosId",
                table: "AspNetUsers",
                column: "DatosId",
                principalTable: "Datos",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Datos_DatosId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Datos");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_DatosId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DatosId",
                table: "AspNetUsers");
        }
    }
}
