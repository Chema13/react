import CardAnime from "./CardAnime"
import CardAnimeAgregado from "./CardAnimeAgregado"

const MainAnime = () => {
    return (
        <div className="flex flex-col">
            
            <div className="flex justify-between items-center">
                <h2 className="text-[28px] font-extralight pt-2 pb-4 justify-between">Últimos episodios
                </h2>
                <span className="uppercase flex bg-[#01bcf3] text-[14px] font-bold items-center text-white px-4 py-[5px] rounded-xl h-6">
                    Hoy</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
            </div>

            <div className="w-full flex justify-between items-center">
                <div className="flex gap-4">
                    <img src="e../../../../public/esferadragon.svg" alt="esfera del dragon" className="rounded-full w-11 h-11" />
                    <h2 className="text-[28px] font-extralight pt-2 pb-4 justify-between">Últimos animes agregados</h2>
                </div>
                <span className="uppercase flex bg-[#01bcf3] text-[14px] font-bold items-center text-white px-4 py-[5px] rounded-xl h-6">
                    Hoy</span>
            </div>

            <div className="grid sm:grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
                <CardAnimeAgregado />
                <CardAnimeAgregado />
                <CardAnimeAgregado />
                <CardAnimeAgregado />
                <CardAnimeAgregado />
                <CardAnimeAgregado />
                <CardAnimeAgregado />
                <CardAnimeAgregado />
            </div>
        </div>

    )
}

export default MainAnime