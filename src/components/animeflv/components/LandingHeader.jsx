import { useState } from "react"

const LandingHeader = () => {

    const [isLive, useIsLive] = useState(true)

    if (useIsLive) {
        //
    }

    return (

        <>
            <header className="py-[14px] flex top-0 justify-center bg-[#2f3439]">

                <div className="flex container px-48 justify-between">
                    <nav className="flex flex-grow basis-0 hover:cursor-pointer">
                        <img src="../../../../public/logoAnimeFlv.webp" alt="logo animeflv" />
                    </nav>

                    <div className="flex items-center">
                        <nav>
                            <ul className="flex [&>li>a]:px-4 [&>li>a]:uppercase [&>li>a]:font-bold [&>li>a]:text-[#979a9d]">
                                <li><a className="hover:text-white transition-colors duration-200" href="#">inicio</a></li>
                                <li><a className="hover:text-white transition-colors duration-200" href="#">directorio anime</a></li>
                            </ul>
                        </nav>

                        <div>
                            <form>
                                <input
                                    type="text"
                                    className="bg-[#262a2e] border-[#262a2e] rounded-[44px] py-[8px] 
                                    focus:bg-[#1c2023] focus:transition-colors duration-300 pl-4 w-[95%] text-white focus:outline-none"
                                    placeholder="Buscar..."
                                />
                                <button type="submit" className="material-symbols-outlined text-white absolute py-[8px] translate-x-[-40px]
                                ">search</button>
                            </form>
                        </div>

                        <div>
                            <div className="bg-[#262a2e] flex items-center px-2 py-2 rounded-md hover:bg-[#22262a] 
                            transition-colors delay-75 hover:cursor-pointer"
                            >
                                <label htmlFor="inicioSesion" className="material-symbols-outlined text-white text-lg font-extrabold">person</label>
                                <span id="inicioSesion" className="uppercase text-white font-bold text-sm">login</span>
                            </div>
                        </div>

                    </div>
                </div>

            </header>

            {isLive &&
                (<div className="bg-[#fd3246] text-center py-1 hover:cursor-pointer">
                    <p className="text-white font-bold">Akitsuri
                        <span className="font-light"> está en vivo
                            <span className="loader"></span>
                        </span>
                    </p>
                </div>)
            }

        </>
    )
}

export default LandingHeader