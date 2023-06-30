const CardAnime = () => {
    return (
        <div className="hover:cursor-pointer">
            <div className="bg-gray-200 rounded-lg z-1 overflow-hidden ">
                <img src="../../../../public/3779.webp" alt="img1" className="rounded-lg z-0 top-0 bottom-0 
                    transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-70 duration-200
                "/>
            </div>
            <p className="text-white rounded-lg text-[10px] font-bold p-[1px] text-center bg-orange-400 w-[35%] -translate-y-12 translate-x-4">
                Episodio 1
            </p>
            <p className="text-white text-sm font-bold -translate-y-12 translate-x-2">Anime nombre</p>
        </div>
    )
}

export default CardAnime