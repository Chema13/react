import LandingHeader from "./components/LandingHeader"
import BarraMain from "./components/BarraMain"
import HeroSection from "./components/HeroSection"
import LandingFooter from "./components/LandingFooter"

const Anime = () => {
    return (

        <div className="bg-[url('../../../public/FondoMain.webp')] h-screen">
            <LandingHeader />

            <main className="container mx-auto px-[190px] md:container md:mx-auto">
                <BarraMain />
                <HeroSection />
            </main>

            <footer>
                <LandingFooter />
            </footer>
        </div>
    )
}

export default Anime