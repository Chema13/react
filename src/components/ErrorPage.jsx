import { useRouteError } from "react-router-dom" //obtiene el error que se presente

function ErrorPage() {

    const error = useRouteError()

    return (
        <div className="space-y-8 ">
            <h1 className="text-6xl text-center font-extrabold mt-20 text-green-900"> CRM - Clientes</h1>
            <p className="text-center">Hubo un Error</p>
            <p className="text-center">{error.message || error.statusText}</p>
        </div>
    )
}

export default ErrorPage