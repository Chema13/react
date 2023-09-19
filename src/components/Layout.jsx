import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-green-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center  text-white'>
          CRM - Cliente{' '}
        </h2>

        <nav className='mt-10'>
          <Link
            to='/'
            className={`${
              location.pathname === '/' ? 'text-green-300' : 'text-white'
            } text-2xl block mt-2 hover:text-green-300`}
          >
            Clientes
          </Link>

          <Link
            to='/clientes/nuevo'
            className={`${
              location.pathname === '/clientes/nuevo'
                ? 'text-green-300'
                : 'text-white'
            } text-2xl block mt-2 hover:text-green-300`}
          >
            Nuevo cliente
          </Link>

          <Link
            to='/nuevo'
            className={`${
              location.pathname === '/nuevo' ? 'text-green-300' : 'text-white'
            } text-2xl block mt-2 hover:text-green-300}`}
          >
            Nuevo
          </Link>
          <Link
            to='/tesla'
            className={`${
              location.pathname === '/tesla' ? 'text-green-300' : 'text-white'
            } text-2xl block mt-2 hover:text-green-300}`}
          >
            Tesla
          </Link>
          <Link
            to='/anime'
            className={`${
              location.pathname === '/anime' ? 'text-green-300' : 'text-white'
            } text-2xl block mt-2 hover:text-green-300`}
          >
            Anime
          </Link>
        </nav>
      </aside>

      <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
