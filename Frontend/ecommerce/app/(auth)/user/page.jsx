"use client";
import React, { useEffect, useState } from "react";
import { userService } from "@/services";
import { FormProvider, useForm } from "react-hook-form";
import PopUp from "@/components/PopUp";
import TextInputData from "./Partials/TextInput";

function UserPanel() {
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const { ...methods } = useForm();

  const onSubmit = (dataEdit) => {
    console.log(dataEdit);
    userService
      .updateData(dataEdit, data.id)
      .then((resp) => console.log(resp))
      .catch((error) => {
        console.log("An error ocurred while fetching data");
        console.log(error);
      })
      .finally(() => setShowPopUp(true));
  };

  useEffect(() => {
    userService
      .dataUser()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("An error ocurred while fetching data");
        console.error(error);
      });
  }, [showPopUp]);

  return (
    <div className="mx-auto mt-12 h-screen max-w-7xl p-4">
      {showPopUp && (
        <PopUp
          redirectTo="/user"
          title="Datos editados corréctamente"
          description=""
          onClose={() => {
            setShowPopUp(false);
            setEdit(false);
          }}
        />
      )}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Mis datos</h2>
      </div>

      <hr className="mt-2 bg-slate-300" />
      {/* Contenido de elementos CRUD */}
      <div className="overflow-x-auto">
        {data === null ? (
          <span>Cargando mis Datos...</span>
        ) : !edit ? (
          <>
            <p className=" my-2 text-xl">
              Nombre: <span className="font-semibold">{data.nombre}</span>
            </p>
            <p className=" my-2 text-xl">
              Apellido: <span className="font-semibold">{data.apellido}</span>
            </p>
            <p className=" my-2 text-xl">
              Provincia: <span className="font-semibold">{data.provincia}</span>
            </p>
            <p className=" my-2 text-xl">
              Ciudad: <span className="font-semibold">{data.ciudad}</span>
            </p>
            <p className=" my-2 text-xl">
              Direccion: <span className="font-semibold">{data.direccion}</span>
            </p>
            <p className=" my-2 text-xl">
              Dni: <span className="font-semibold">{data.dni}</span>
            </p>
            <p className=" my-2 text-xl">
              Direccion de entrega:{" "}
              <span className="font-semibold">{data.direccion_Entrega}</span>
            </p>
            <button
              className="mx-2 my-4 rounded-xl bg-primary px-6 py-2 text-center text-lg text-white transition-all hover:scale-105"
              onClick={() => setEdit(true)}
            >
              Editar mis Datos
            </button>
          </>
        ) : (
          <>
            <FormProvider {...methods}>
              <form id="dataForm" onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <TextInputData
                    label="Nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={data.nombre}
                  />
                  <TextInputData
                    label="Apellido"
                    name="apellido"
                    placeholder="Tu apellido"
                    value={data.apellido}
                  />
                  <TextInputData
                    label="Provincia"
                    name="provincia"
                    placeholder="Provincia"
                    value={data.provincia}
                  />
                  <TextInputData
                    label="Ciudad"
                    name="ciudad"
                    placeholder="Ciudad"
                    value={data.ciudad}
                  />
                  <TextInputData
                    label="Dirección"
                    name="direccion"
                    placeholder="Tu dirección"
                    value={data.direccion}
                  />
                  <TextInputData
                    label="DNI"
                    name="dni"
                    placeholder="Tu dni"
                    type="number"
                    value={data.dni}
                  />
                  <TextInputData
                    label="Dirección de entrega"
                    name="direccion_Entrega"
                    placeholder="Direccion de entrega"
                    value={data.direccion_Entrega}
                  />
                  <div className="ml-auto mr-16 flex ">
                    <button
                      className="mx-2 my-4 rounded-xl bg-primary px-6 py-2 text-center text-lg text-white transition-all hover:scale-105"
                      type="submit"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </>
        )}
      </div>
    </div>
  );
}

export default UserPanel;
