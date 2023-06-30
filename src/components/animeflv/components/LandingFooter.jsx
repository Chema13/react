const LandingFooter = () => {
    return (
        <div className="bg-[#3b4248] w-full h-28">

            <div className="md:container md:mx-auto flex px-[190px] h-full">

                <div className="w-[50%] flex flex-col justify-center">
                    <div>
                        <p className="text-[13px] text-white font-sans pb-3"> Anime Online
                            <span className="text-[#777f82]"> - Ningún video se encuentra alojado en nuestros servidores.</span>
                        </p>
                    </div>

                    <div className="flex rounded-xl bg-[#292e32] text-white [&>p]:px-3 [&>p]:py-1 text-[12px] font-semibold 
                    [&>p]:hover:cursor-pointer justify-between w-[75%]"
                    >
                        <p className="hover:underline">Términos y condiciones</p>
                        <p className="hover:underline">Política de privacidad</p>
                        <p className="hover:underline">Sobre AnimeFLV</p>
                    </div>
                </div>

                <div className="w-[50%] justify-end flex items-center space-x-3">

                    <a className="material-symbols-outlined text-gray-400 p-2 bg-[#292e32] rounded-full
                    hover:bg-[#1d2124] hover:text-white hover:cursor-pointer transition-colors duration-500"
                    >
                        account_circle
                    </a>

                    <p className="material-symbols-outlined text-gray-400 p-2 bg-[#292e32] rounded-full
                    hover:bg-[#1d2124] hover:text-white hover:cursor-pointer transition-colors duration-500"
                    >
                        play_circle
                    </p>

                </div>
            </div>

        </div>
    )
}

export default LandingFooter