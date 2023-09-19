/* eslint-disable react-refresh/only-export-components */
import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from 'react-router-dom'
import { obtenerCliente, actualizarCliente } from '../data/Clientes'
import Formulario from '../components/Formulario'
import Error from '../components/Error.jsx'

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId)

  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'El cliente no fue encontrado',
    })
  }
  return cliente
}

export async function action({ request, params }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //validación
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  if (!emailRegex.test(email)) {
    errores.push('El Email no es válido')
  }

  //Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores
  }

  //actualizar clinte
  await actualizarCliente(params.clienteId, datos)
  return redirect('/')
}

const EditarCliente = () => {
  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()

  return (
    <>
      <h1 className='font-black text-4xl text-green-900'> Editar Cliente </h1>
      <p className='mt-3'>
        {' '}
        A continuación podrás modificar los datos del cliente
      </p>

      <div className='flex justify-end'>
        <button
          className='bg-green-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}
          //onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method='post' noValidate>
          <Formulario cliente={cliente} />

          <input
            type='submit'
            className='mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg'
            value='Guardar Cambios'
          />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente
