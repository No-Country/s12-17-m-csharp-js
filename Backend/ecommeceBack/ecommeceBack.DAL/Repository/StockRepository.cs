using AutoMapper;
using ecommeceBack.API.Exceptions;
using ecommeceBack.DAL.Contrato;
using ecommeceBack.DAL.Dbcontext;
using ecommeceBack.Models.Entidades;
using ecommeceBack.Models.VModels.ProductoDTO;
using ecommeceBack.Models.VModels.StockDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper _mapper;

        public StockRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

     
        public async Task<List<HistorialStockDTO>> BusquedaPorIdProducto(int idProducto)
        {

            try
            {
                var Stock = await _dbcontext.HistorialStocks.Where(s => s.ProductoId == idProducto).ToListAsync();
                
                return _mapper.Map<List<HistorialStockDTO>>(Stock);
            }
            catch (Exception)
            {
                throw;
            }
        }
        //elimina por id de producto
     
        public async Task<HistorialStockDTO> InOut(int idProducto, int cantidad, string descripcion, bool inOut )
        {
            try
            {
                var Stock = await _dbcontext.HistorialStocks.Where(s => s.Id == idProducto).OrderByDescending(s=> s.FechaStkupdate).FirstOrDefaultAsync();
                var HistorialStock = new HistorialStock();
                HistorialStock.ProductoId = idProducto;


                if (Stock == null)
                {
                    if (inOut == false) {

                        throw new BadRequestException("No se puede quitar stock por que no tiene");

                    }                 


                    HistorialStock.InOut = inOut;

                    HistorialStock.Cantidad = cantidad;
                    
                    HistorialStock.Descripcion  = descripcion;

                    HistorialStock.StockActual = cantidad;


                }
                else
                {

                    HistorialStock.Cantidad = cantidad;
                    HistorialStock.Descripcion = descripcion;
                    HistorialStock.InOut = inOut;

                    if (inOut == true)
                    {

                        HistorialStock.StockActual = Stock.StockActual + cantidad;

                    }
                    else
                    {

                        HistorialStock.StockActual = Stock.StockActual - cantidad;

                    }


                }

                _dbcontext.Add(HistorialStock);

               await _dbcontext.SaveChangesAsync();

                return _mapper.Map<HistorialStockDTO>(HistorialStock);

            }
            catch (Exception)
            {
                throw;
            }
        }      
          
    }
}
