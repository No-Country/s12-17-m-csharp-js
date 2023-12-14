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

        public async Task<StockDTO> Actualizar(int id, CreacionStockDTO modelo)
        {

            try
            {
                var Stock = await _dbcontext.Stocks.Where(s => s.Id == id).FirstOrDefaultAsync();

                if (Stock == null) throw new NotFoundException();
               
                Stock.Descripcion = modelo.Descripcion;

                Stock.Id = modelo.Id;

                Stock.Cantidad = modelo.Cantidad;                       

                _dbcontext.Update(Stock);

                await _dbcontext.SaveChangesAsync();


                return _mapper.Map<StockDTO>(Stock);

            }
            catch (Exception)
            {
                throw;
            }

        }

        public async Task<StockDTO> BusquedaPorProductoCantidad(int idProducto)
        {

            try
            {
                var stock = await _dbcontext.Stocks.Include(s => s.Id).FirstOrDefaultAsync(s => s.Id == idProducto);
                if (stock == null) throw new NotFoundException();
                return _mapper.Map<StockDTO>(stock);
            }
            catch (Exception)
            {
                throw;
            }
        }
        //elimina por id de producto
        public async Task<bool> Eliminar(int idProducto)
        {
            try
            {
                var StockD = await _dbcontext.Stocks.Where(s => s.Id == idProducto).FirstOrDefaultAsync(s => s.Id == idProducto);

                if (StockD == null) throw new NotFoundException();

                _dbcontext.Remove(StockD);

                await _dbcontext.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        public async Task<StockDTO> Entrada(int idProducto, StockentradaDTO stockentrada)
        {
            try
            {
                var Stock = await _dbcontext.Stocks.Where(s => s.Id == idProducto).FirstOrDefaultAsync(s => s.Id == idProducto);

                if (Stock == null) throw new NotFoundException();

                Stock.Cantidad += stockentrada.Entrada;            

                _dbcontext.Update(Stock);

                await _dbcontext.SaveChangesAsync();


                return _mapper.Map<StockDTO>(Stock);

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<StockDTO> Insertar(CreacionStockDTO modelo)
        {
            var Stockadd = _mapper.Map<Stock>(modelo);
            _dbcontext.Add(Stockadd);
            await _dbcontext.SaveChangesAsync();
            return _mapper.Map<StockDTO>(Stockadd);
        }

        public async Task<StockDTO> ObtenerPorId(int id)
        {
            try
            {
                var stock = await _dbcontext.Stocks.Include(s => s.StockID).FirstOrDefaultAsync(s => s.Id == id);
                if (stock == null) throw new NotFoundException();
                return _mapper.Map<StockDTO>(stock);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IQueryable<Stock>> ObtenerTodos()
        {
            try
            {
                IQueryable<Stock> queryStock = _dbcontext.Stocks;
                return queryStock;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<StockDTO> Salida(int idProducto,StocksalidaDTO stocksalida)
        {
            try
            {
                var Stock = await _dbcontext.Stocks.Where(s => s.Id == idProducto).FirstOrDefaultAsync(s => s.Id == idProducto);

                if (Stock == null) throw new NotFoundException();

                Stock.Cantidad -= stocksalida.Salida;

                _dbcontext.Update(Stock);

                await _dbcontext.SaveChangesAsync();


                return _mapper.Map<StockDTO>(Stock);

            }
            catch (Exception)
            {
                throw;
            }

            
        }
    }
}
