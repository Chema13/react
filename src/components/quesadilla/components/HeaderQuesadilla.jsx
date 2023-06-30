import { useNavigate } from "react-router-dom"

const HeaderQuesadilla = () => {

    const navigate = useNavigate()

    return (
        <header className="px-3 py-8 flex items-center w-full top-0 z-40 flex-grow border-b-4">

            <div className="w-[35%] pl-40">
                <h1 className="text-2xl font-bold pl-3">Tu eCommerce</h1>
                <h1 className="border-[3px] text-center border-black px-5 py-4 font-black uppercase">Quesadilla Lab</h1>
                {/* <img className="w-[200px]" src="../../../public/logoques.png" alt="quesadillaLab.com" /> */}
            </div>

            <nav className="w-[65%] pl-52">
                <ul className="flex [&>li>a]:text-[18px] [&>li>a]:font-black [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3">
                    <li><a href="">Home</a></li>
                    <li><a href="">Demos</a></li>
                    <li><a href="">Comprar</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Iniciar Sesión</a></li>
                    <li><a className="hover:cursor-pointer" onClick={() => navigate('/')}>Regresar</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default HeaderQuesadilla