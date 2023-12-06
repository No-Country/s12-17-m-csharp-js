"use client";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import TextInput from "../Partials/TextInput";
import Dropzone from "react-dropzone";
import TextAreaInput from "@/app/components/Form/TextAreaInput";
import RadioInputContent from "@/app/components/Form/RadioInputContent";
import IsRequired from "@/app/components/Form/IsRequired";
import CustomDropdown from "@/app/components/Form/CustomDropdown";

const DetailInfoStep = () => {

    return (
        <div>
            <h2 className="mt-8 text-5xl font-bold">Composición del producto</h2>

            <div className="grid grid-cols-1 gap-6 mt-6">

                <TextInput
                    isRequired={true}
                    label="Titulo"
                    placeholder={"Titulo del producto a vender"}
                />

                <TextAreaInput
                    isRequired={true}
                    label={"Descripción"}
                    placeholder={"Breve descripción del producto a vender..."}
                    messageValidation={"Dé a su producto una descripción breve y clara, 120-160 caracteres es la longitud recomendada para los motores de búsqueda."}
                />



                <div className="grid grid-cols-2 gap-12 mt-6">
                    <TextInput
                        isRequired={true}
                        label="Marca"
                        placeholder={""}
                        messageValidation={"Ingrese la marca real del producto, en caso de no tener rellene con “Genérica”."}
                    />

                    <TextInput
                        isRequired={true}
                        label="Modelo"
                        placeholder={""}
                    />
                </div>


                <RadioInputContent
                    label="Estado del producto"
                    isRequired={true}
                    groupName={"estado"}
                    options={
                        [{ name: "Nuevo", value: "Nuevo" }, { name: "Usado", value: "Usado" }]
                    }
                />

                <div className="space-y-4">

                    <p className="font-bold text-xl">
                        <IsRequired isRequired={true}>
                            {"Código universal"}
                        </IsRequired>
                    </p>



                    <p className='text-lg text-[#696969]' >
                        Numero que identifica su producto a nivel global.
                    </p>



                    <p className='text-lg text-[#696969]' >
                        Podrás encontrar el código en la caja o etiqueta, junto al código de barras.
                    </p>


                    <div className="grid grid-cols-2">
                        <div>
                            <small className="text-sm text-gray-500">
                                Ingrese aquí el código universal
                            </small>

                            <input
                                className={`text-gray-800 px-4 py-3 rounded-md w-full bg-black/10`}
                                type="text"
                                placeholder={""}
                            />
                        </div>
                    </div>

                </div>

                <small className="text-sm text-gray-500 my-8">
                    En caso que su producto no lo tenga, no llene este casillero y elija una de la siguientes opciones
                </small>

                <CustomDropdown 
                    options={
                        [{ name: "Option 1", value: "Option 1" }, { name: "Option 2", value: "Option 2" }]
                    }
                />

            </div>

            <div className="flex justify-end w-full mt-5">
                <button className="flex items-center justify-center mb-2 transition duration-300 rounded-full bg-secondary text-primary h-14 w-14 hover:bg-secondary-600">
                    <FaArrowRight className="text-primary" size={20} />
                </button>
            </div>

        </div>
    );
};
export default DetailInfoStep;
