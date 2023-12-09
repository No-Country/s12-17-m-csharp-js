"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import TextInput from "../Partials/TextInput";
import Dropzone from "react-dropzone";

const DetailInfoStep = () => {
  return (
    <div>
      <h1 className="text-xl font-medium">
        Fotos <span className="text-red-500">*</span>
      </h1>
      <p className="mt-6 text-gray-500">
        Te damos algunos consejos para que tu producto destaque
      </p>
      <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
        <li>
          La primera foto debe tener fondo blanco y buena calidad, ya que será
          la portada.
        </li>
        <li>No agregues bordes.</li>
        <li>Marcas de agua ni logos.</li>
        <li>No agregues datos de contacto.</li>
        <li>Condiciones de ventas o envíos.</li>
        <li>
          Si necesitas mostrar el producto en contexto, deberás hacerlo a partir
          de la segunda imagen.
        </li>
        <li>Saca fotos grandes y desde diferentes ángulos.</li>
        <li>
          Si vas a usar fotos que encontraste en internet, asegúrate de tener
          autorización expresa del titular de los derechos
        </li>
      </ul>

      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="p-8 border-2 border-dashed border-primary rounded-xl border-spacing-4 mt-6">
                <p className="flex items-center justify-center gap-2 text-primary cursor-pointer">
                  <MdOutlineFileUpload className="text-2xl" />
                  <span>Selecciona o arrastra archivos aquí</span>
                </p>
                <p className="w-2/3 mx-auto mt-3 text-sm text-center text-gray-500">
                  Subí tu imagen en JPG, JPEG, PNG o WEBP, con una resolución
                  mínima de 500 pixeles en ambos lados y hasta 10MB.
                </p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>

      <h2 className="mt-12 text-xl font-medium">Composición del producto</h2>

      <p className="mt-4 text-gray-500">
        Recuerda que mientras mas información proporciones, llamara más la
        atención de los compradores.
      </p>
      <small className="text-xs font-light text-gray-600 text-end">
        * En las dimensiones recuerda poner el sistema de medición utilizado
      </small>
      <div className="grid grid-cols-2 gap-12 mt-6">
        <div>
          <TextInput label="Materiales" />
          <small className="text-xs text-gray-500 text-end">
            * En caso de no aplicar, dejar vacío
          </small>
        </div>
        <TextInput label="Largo" />
        <TextInput label="Ancho" />
        <TextInput label="Alto"></TextInput>
        <div>
          <TextInput label="Stock" />
          <small className="text-xs text-gray-500 text-end">
            * Indica la cantidad de unidades que tienes a la venta
          </small>
        </div>
        <div className="flex justify-end w-full mt-5">
          <Link
            href="/control_panel/products/create/pricing_step"
          >
            <button className="flex items-center justify-center mb-2 transition duration-300 rounded-full bg-secondary text-primary h-14 w-14 hover:bg-secondary-600">
              <FaArrowRight className="text-primary" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DetailInfoStep;
