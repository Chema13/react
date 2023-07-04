import AnimeEmision from "./AnimeEmision"
import MainAnime from "./MainAnime"

const HeroSection = () => {
    return (
        <main className="pt-6 lg:px-48 flex gap-6">

            <section className="w-[28%]">

                <div className="flex justify-between bg-white p-[15px] rounded-sm border-[1px] border-white border-b-[#f3f3f3]">
                    <h1 className="uppercase font-semibold text-[#3b4248]">animes en emisión</h1>
                    <span className="material-symbols-outlined text-orange-400 font-bold">
                        play_arrow
                    </span>
                </div>

                <aside className="w-full">
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

            <section className="w-[72%]">
                <MainAnime />
            </section>

        </main>
    )
}

export default HeroSection