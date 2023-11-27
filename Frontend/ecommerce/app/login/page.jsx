import Button from "../components/Form/Button"
import Layout from "../components/Form/Layout"
import TextInput from "../components/Form/TextInput"
import SocialButton from "../components/Form/SocialButton"
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const page = () => {
    return (
        <Layout>
            <div className="mt-20 mb-20 font-bold"><h1>Ingresar</h1></div>
            <h2 className=" mb-10 font-bold">_____ Ingresar con</h2>
            <div className="flex  justify-between mt-10">
                <div className="mr-4">
                    <SocialButton ><p className="flex items-center justify-center"><FaGoogle className="mr-2" /> Continuar con Google</p></SocialButton>
                    </div>
                <div className="ml-4">
                    <SocialButton ><p className="flex items-center justify-center"><MdFacebook className="mr-2" /> Continuar con Google</p></SocialButton>
                    </div>
            </div>
            <p className="text-center mt-10 mb-8 font-bold" >o</p>
            <div className="mb-4">
                <TextInput name="Email" type="email" />
                <TextInput name="Password" type="password" />
            </div>
            <div className="mt-16 mb-4">
            <Button>
                <FaArrowRight />
            </Button>
            </div>
           
        </Layout>
    )
}
export default page