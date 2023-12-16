using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ecommeceBack.API.Migrations
{
    /// <inheritdoc />
    public partial class ActualizacionPedido : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "usuarioId",
                table: "Pedidos",
                newName: "UsuarioId");

            migrationBuilder.AlterColumn<string>(
                name: "UsuarioId",
                table: "Pedidos",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Renglones_PedidoId",
                table: "Renglones",
                column: "PedidoId");

            migrationBuilder.CreateIndex(
                name: "IX_Renglones_ProductoId",
                table: "Renglones",
                column: "ProductoId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_UsuarioId",
                table: "Pedidos",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedidos_AspNetUsers_UsuarioId",
                table: "Pedidos",
                column: "UsuarioId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Renglones_Pedidos_PedidoId",
                table: "Renglones",
                column: "PedidoId",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Renglones_Productos_ProductoId",
                table: "Renglones",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedidos_AspNetUsers_UsuarioId",
                table: "Pedidos");

            migrationBuilder.DropForeignKey(
                name: "FK_Renglones_Pedidos_PedidoId",
                table: "Renglones");

            migrationBuilder.DropForeignKey(
                name: "FK_Renglones_Productos_ProductoId",
                table: "Renglones");

            migrationBuilder.DropIndex(
                name: "IX_Renglones_PedidoId",
                table: "Renglones");

            migrationBuilder.DropIndex(
                name: "IX_Renglones_ProductoId",
                table: "Renglones");

            migrationBuilder.DropIndex(
                name: "IX_Pedidos_UsuarioId",
                table: "Pedidos");

            migrationBuilder.RenameColumn(
                name: "UsuarioId",
                table: "Pedidos",
                newName: "usuarioId");

            migrationBuilder.AlterColumn<string>(
                name: "usuarioId",
                table: "Pedidos",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
