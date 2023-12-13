import Link from "next/link";
import RadioInputGroup from "./Partials/RadioInputGroup";
import TextAreaInput from "@/app/components/Form/TextAreaInput";
import TextInput from "./Partials/TextInput";
import { FaArrowRight } from "react-icons/fa";

const CreateProduct = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold">Composición del producto</h2>

      <div className="grid grid-cols-1 gap-6 mt-10">
        <TextInput
          label="Titulo"
          placeholder={"Titulo del producto a vender"}
        />

        <TextAreaInput
          label={"Descripción"}
          placeholder={"Breve descripción del producto a vender..."}
          messageValidation={
            "Dé a su producto una descripción breve y clara, 120-160 caracteres es la longitud recomendada para los motores de búsqueda."
          }
        />

        <div className="grid grid-cols-2 gap-12">
          <TextInput
            label="Marca"
            messageValidation={
              "Ingrese la marca real del producto, en caso de no tener rellene con “Genérica”."
            }
          />
          <TextInput label="Modelo" placeholder={""} />
          <TextInput
            label="Precio"
            placeholder="$"
            messageValidation="A cuánto quieres vender tu producto"
          />
          <TextInput
            label="Stock"
            placeholder="1"
            messageValidation="Que cantidad de productos tienes"
          />
        </div>
        <RadioInputGroup
          title="Estado del producto:"
          name="productCondition"
          options={["Nuevo", "Usado"]}
        />
      </div>

      <div className="flex justify-end w-full mt-5">
        <Link href="/control_panel/products/create/detail_info_step">
          <button className="flex items-center justify-center mb-2 transition duration-300 rounded-full bg-secondary text-primary h-14 w-14 hover:bg-secondary-600">
            <FaArrowRight className="text-primary" size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CreateProduct;
