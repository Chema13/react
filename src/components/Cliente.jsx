/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import { Form, useNavigate, redirect } from 'react-router-dom'
import { eliminarCliente } from '../data/Clientes'

export async function action({ params }) {
  await eliminarCliente(params.clienteId)
  return redirect('/')
}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate()

  const { nombre, empresa, email, telefono, id } = cliente
  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-grey-800 '>{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className='p-6 space-y-2'>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Email: </span>
          {email}
        </p>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Tel: </span>
          {telefono}
        </p>
      </td>

      <td className='p-6 flex gap-4'>
        <button
          type='button'
          className='text-green-600 hover:text-green-700 uppercase font-bold text-xs'
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method='post'
          action={`/clientes/${id}/eliminar`}
          onSubmit={e => {
            if (!confirm('¿Deseas eleminar este registro?')) {
              e.preventDefault()
            }
          }}
        >
          <button
            type='submit'
            className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
          >
            Eliminar
          </button>

          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
        </Form>
      </td>
    </tr>
  )
}

Cliente.propTypes = {
  cliente: PropTypes.any,
}

export default Cliente
