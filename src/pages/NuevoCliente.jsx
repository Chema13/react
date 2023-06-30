/* eslint-disable react-refresh/only-export-components */
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error.jsx'
import { agregarCliente } from '../data/Clientes'


export async function action({ request }) {

    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')

    //validación
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email)) {
        errores.push('El Email no es válido')
    }

    //Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores
    }

    await agregarCliente(datos)
    
    return redirect('/')
}


const NuevoCliente = () => {

    const errores = useActionData()
    const navigate = useNavigate()

    console.log(errores)

    return (
        <>
            <h1 className="font-black text-4xl text-green-900"> Nuevo Cliente </h1>
            <p className="mt-3"> Llenar todos los campos para agregar un nuevo cliente</p>

            <div className="flex justify-end">
                <button
                    className="bg-green-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                //onClick={() => navigate('/')}
                >
                    Volver
                </button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method='post'
                    noValidate
                >
                    <Formulario />

                    <input
                        type="submit"
                        className='mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg'
                        value='Registrar Cliente'
                    />
                </Form>

            </div>

        </>
    )
}

export default NuevoCliente