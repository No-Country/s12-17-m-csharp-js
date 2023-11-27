import Button from "../components/Form/Button"
import Layout from "../components/Form/Layout"
import TextInput from "../components/Form/TextInput"

const page = () => {
    return (
        <Layout>
            <TextInput name="Nombres" required />
            <TextInput name="Apellidos" required />
            <TextInput name="Email" type="email" required />
            <TextInput name="Contraseña" type="password" required />
            <TextInput name="Confirmar contraseña" type="password" required />
            <Button>Crear cuenta</Button>
        </Layout>
    )
}
export default page