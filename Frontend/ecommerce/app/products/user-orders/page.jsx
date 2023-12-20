"use client";
import React, { useEffect, useState } from "react";
import orderService from "@/services/orderService";
import OrdersTable from "./Partials/OrdersTable";

function OrdersPanel() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    orderService
      .getMyOrders()
      .then((orders) => {
        setOrders(orders);
        setIsLoading(false);
        console.log(orders);
      })
      .catch((error) => {
        console.log("An error ocurred while fetching orders");
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto mt-12 h-screen max-w-7xl p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Mis compras</h2>
      </div>

      <hr className="mt-2 bg-slate-300" />
      {/* Contenido de elementos CRUD */}
      <div className="overflow-x-auto">
        {orders.length !== 0 ? (
          <OrdersTable order={orders} />
        ) : isLoading ? (
          <span>Cargando mis compras...</span>
        ) : (
          <span>No tienes compras realizadas</span>
        )}
      </div>
    </div>
  );
}

export default OrdersPanel;
