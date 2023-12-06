"use client";
import TextInput from "../Partials/TextInput";
import RadioInputGroup from "../Partials/RadioInputGroup";

const DetailInforStep = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black">
        Último paso, definamos el precio
      </h1>
      <div className="w-1/2 mt-8">
        <TextInput>
          <p className="font-medium">
            Precio <span className="text-red-500">*</span>
          </p>
          <small className="text-gray-500">
            A cuanto quieres vender el producto
          </small>
        </TextInput>
      </div>
      <h2 className="font-medium mt-6">Cargos y cuotas de venta</h2>
      <p className="text-sm text-gray-500 mt-2">
        Se paga cargo por cada venta.
      </p>
      <span className="flex justify-between mt-12">
        <p className="text-sm text-gray-500">Cargo por vender (14%)</p>
        <p className="text-black">$7,980</p>
      </span>

      <RadioInputGroup
        title="Cuotas"
        name="installments"
        options={[
          "No quiero agregar cuotas",
          "3 a 12 con interés bajo",
          "3 al mismo precio publicado",
          "6 al mismo precio publicado",
        ]}
      />

      <RadioInputGroup
        title="Forma de entrega"
        name="deliveryMethod"
        options={["Por mi cuenta", "Acordar con el vendedor"]}
      />

      <RadioInputGroup
        title="Retiro en persona"
        name="inPersonPickup"
        options={["Ofrezco", "No ofrezco"]}
      />

      <RadioInputGroup
        title="Garantía"
        name="warranty"
        options={[
          "Garantía del vendedor",
          "Garantía de fabrica",
          "Sin garantía",
        ]}
      />

      <div className="flex justify-end flex-end text-primary spacey-x-2 mt-12 font-semibold">
        <button className="p-4 px-6">Cancelar</button>
        <button className="p-4 bg-secondary rounded-3xl px-6">Confirmar</button>
      </div>
    </div>
  );
};
export default DetailInforStep;
