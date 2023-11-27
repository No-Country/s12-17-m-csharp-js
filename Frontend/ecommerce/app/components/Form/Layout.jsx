import Button from "./Button"
import TextInput from "./TextInput"


const Layout = ({ children }) => {
    return (
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-8">
            {/* Columna del logo */}
            <div className="flex items-center justify-center">
                <div className="bg-blue-500 h-32 w-32 rounded-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Logo</h1>
                </div>
            </div>

            {/* Columna del formulario */}
            <div className="flex items-center">
                <form className="w-full">
                    {children}
                </form>
            </div>
        </div>
    )
}
export default Layout