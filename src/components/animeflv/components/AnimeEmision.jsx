const AnimeEmision = () => {
    return (
        <ul className="pl-4 py-3 bg-white w-[90%]">
            <li>
                <a className="w-full text-[14px] flex items-center gap-10 hover:text-[#01bcf3] [&>span#etiquetaAnime]:hover:bg-[#01bcf3]" href="#">
                    <span className="material-symbols-outlined inline-block">play_circle</span>
                    Anime en emisión
                    <span id="etiquetaAnime" className="uppercase bg-[#80ddf9] text-center text-[12px] font-bold text-white px-2 rounded-xl inline-block"> anime </span>
                </a>
            </li>
        </ul>
    )
}

export default AnimeEmision