import DropdownOrders from "./DropdownOrders";

const OrdersTable = ({ order }) => {
  return (
    <table className="mb-60 min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Id del pedido
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Precio
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Estado
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Fecha
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  text-gray-500">
            Porductos
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 bg-white">
        {order.map((or) => (
          <tr key={or.id}>
            <td className="whitespace-nowrap px-6 py-4">{or.id}</td>
            <td className="whitespace-nowrap px-6 py-4">
              $ {parseFloat(or.total).toFixed(2)}
            </td>
            <td className="whitespace-nowrap px-6 py-4">{or.state}</td>
            <td className="whitespace-nowrap px-6 py-4">{or.date}</td>
            <td className="flex items-center space-x-4 whitespace-nowrap px-6 py-4">
              <DropdownOrders title={"Productos"} options={or.products} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default OrdersTable;
