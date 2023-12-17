using AutoMapper;
using ecommeceBack.BLL.contrato;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.DatosDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ecommeceBack.BLL.Service
{
    public class DatosService : IGenericService<CreacionDatosDTO, DatosDTO>, IDatosService
    {
        private readonly IGenericRepository<CreacionDatosDTO, DatosDTO, Datos> _datosRepo;
        private readonly IMapper mapper;

        public DatosService(IGenericRepository<CreacionDatosDTO, DatosDTO, Datos> datosRepo, IMapper mapper)
        {
            _datosRepo = datosRepo;
            this.mapper = mapper;
        }

        public async Task<DatosDTO> Registrar(CreacionDatosDTO modelo)
        {
            return await _datosRepo.Insertar(modelo);
        }

        public async Task<DatosDTO> Actualizar(int id, CreacionDatosDTO modelo)
        {
            return await _datosRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _datosRepo.Eliminar(id);
        }

        public Task<DatosDTO> ObtenerPorId(int id)
        {
            return _datosRepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<DatosDTO>> ObtenerTodos(string? datos)
        {
          var query = await _datosRepo.ObtenerTodos();
            if(datos!= null) { 
            var listaxprovincia = await query.Where(c=> c.Provincia== datos || c.Ciudad== datos).OrderBy(C=> C.Provincia).ThenBy(C=>C.Ciudad).ToListAsync();
                return mapper.Map<IEnumerable<DatosDTO>>(listaxprovincia);
            }
           
            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<DatosDTO>>(lista);
        }

        public async Task<IEnumerable<DatosDTO>> Obtenerxfiltros(string? datos)
        {
            var query = await _datosRepo.ObtenerTodos();
            if (datos != null)
            {
                var listaxprovincia = await query.Where(c => c.Provincia == datos || c.Ciudad == datos).OrderBy(C => C.Provincia).ThenBy(C => C.Ciudad).ToListAsync();
                return mapper.Map<IEnumerable<DatosDTO>>(listaxprovincia);
            }

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<DatosDTO>>(lista);
        }

        public async Task<IEnumerable<DatosDTO>> ObtenerTodos()
        {
            var query = await _datosRepo.ObtenerTodos();
 
            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<DatosDTO>>(lista);
        }
    }

}
