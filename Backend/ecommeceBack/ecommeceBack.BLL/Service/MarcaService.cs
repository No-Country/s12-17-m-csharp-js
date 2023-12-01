using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class MarcaService : IMarcaService
    {
        private readonly IGenericRepository<Marca> _marcaRepo;

        public MarcaService(IGenericRepository<Marca> marcaRepo)
        {
            _marcaRepo = marcaRepo;
        }

        public Task<bool> Actualizar(Marca modelo)
        {
            return _marcaRepo.Actualizar(modelo);
        }

        public Task<bool> Eliminar(int id)
        {
            return _marcaRepo.Eliminar(id);
        }

        public Task<Marca> ObtenerPorId(int id)
        {
            return _marcaRepo.ObtenerPorId(id);
        }

        public Task<IQueryable<Marca>> ObtenerTodos()
        {
            return _marcaRepo.ObtenerTodos();
        }

        public Task<bool> Registrar(MarcaDTO modelo)
        {
            Marca marca = new Marca()
            {
                Nombre = modelo.Nombre
            };
            return _marcaRepo.Insertar(marca);
        }
    }
}
