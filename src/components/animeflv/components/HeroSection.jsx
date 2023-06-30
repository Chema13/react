import AnimeEmision from "./AnimeEmision"
import MainAnime from "./MainAnime"

const HeroSection = () => {
    return (
        <main className="flex pt-5">

            <section className="w-[30%] justify-center">
                <div className="flex justify-between bg-white w-[90%] p-[15px] rounded-sm border-[1px] border-white border-b-[#f3f3f3]">
                    <h1 className="uppercase font-semibold text-[#3b4248]">animes en emisión</h1>
                    <span className="material-symbols-outlined text-orange-400 font-bold">
                        play_arrow
                    </span>
                </div>

                <aside className="flex-col justify-center">
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                    <AnimeEmision />
                </aside>
            </section>

            <section className="w-[70%]">
                <MainAnime />
            </section>
        </main>
    )
}

export default HeroSection