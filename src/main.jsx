import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {
  action as NuevoClienteAction,
} from './pages/NuevoCliente'
import Index, { loader as clienteLoader } from './pages/Index'
import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from './components/EditarCliente'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'
/// probando

import Prueba from './components/pruebaCss/Prueba'
import Tesla from './components/pruebaCss/Tesla'
import Anime from './components/anime/Anime'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        //Loader para obtener datos de un API o de un objeto (similar a un state)
        loader: clienteLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        //Action para procesar la entrada de datos en un form
        action: NuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction,
      },
    ],
  },
  {
    path: '/nuevo',
    element: <Prueba />,
  },
  {
    path: '/tesla',
    element: <Tesla />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/anime',
    element: <Anime />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
