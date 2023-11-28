﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecommeceBack.DAL.Contrato
{
    public interface IGenericRepository<TEntityModel> where TEntityModel : class
    {
        Task<bool> Insertar(TEntityModel modelo);

        Task<bool> Actualizar(TEntityModel modelo);

        Task<bool> Eliminar(int id);

        Task<TEntityModel> ObtenerPorId(int id);

        Task<IQueryable<TEntityModel>> ObtenerTodos();
    }
}
