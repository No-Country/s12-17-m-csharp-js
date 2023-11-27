import Button from "../components/Form/Button"
import Layout from "../components/Form/Layout"
import TextInput from "../components/Form/TextInput"
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    return (
        <Layout>
            <TextInput name="Email" type="email" />
            <TextInput name="Password" type="password" />
            <Button>
                <FaArrowRight />
            </Button>
        </Layout>
    )
}
export default page