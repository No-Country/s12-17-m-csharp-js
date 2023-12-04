using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Repository;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.CategoriaDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.BLL.Service
{
    public class CategoriaService : IGenericService<CreacionCategoriaDTO, CategoriaDTO>
    {
        private readonly IGenericRepository<CreacionCategoriaDTO, CategoriaDTO, Categoria> categoriaRepository;
        private readonly IMapper mapper;

        public CategoriaService(IGenericRepository<CreacionCategoriaDTO, CategoriaDTO, Categoria> categoriaRepository, IMapper mapper)
        {
            this.categoriaRepository = categoriaRepository;
            this.mapper = mapper;
        }
        public async Task<IEnumerable<CategoriaDTO>> ObtenerTodos()
        {
            try
            {
                var queryable = await categoriaRepository.ObtenerTodos();

                var listCategorias = await queryable.ToListAsync();

                return  mapper.Map<IEnumerable<CategoriaDTO>>(listCategorias);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<CategoriaDTO> ObtenerPorId(int id)
        {
            try
            {
                return await categoriaRepository.ObtenerPorId(id);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<CategoriaDTO> Registrar(CreacionCategoriaDTO modelo)
        {
            try
            {
                return await categoriaRepository.Insertar(modelo);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<CategoriaDTO> Actualizar(int id,CreacionCategoriaDTO modelo)
        {
            try
            {
                return await categoriaRepository.Actualizar(id, modelo);

            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {
                return await categoriaRepository.Eliminar(id);

            }
            catch (Exception)
            {

                throw;
            }
        }



    }
}
