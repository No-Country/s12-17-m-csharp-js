namespace ecommeceBack.API.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string? message =  "No existe un registro con el id especificado.") : base(message)
        {
        }
    }
}
