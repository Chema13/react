const CardAnimeAgregado = () => {
    return (
        <div className="hover:cursor-pointer">
            <ul className="bg-white rounded-lg relative h-60">
                <li className="items-center shadow-xl">
                    <div className="absolute top-1 left-1 bottom-1 h-[97%] w-[95%] mx-auto z-10">
                        <img className="object-center object-cover h-full w-full mx-auto rounded-lg hover:bg-blue-300" src="../../../../public/3779.webp" alt="img2" />
                        <div className="absolute top-48 text-sm justify-end p-1 bg-orange-400 rounded-lg">
                            <span>Anime</span>
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="text-center py-3 font-bold text-sm"> Nombre del anime en emisión</h3>
        </div>

    )
}

export default CardAnimeAgregado