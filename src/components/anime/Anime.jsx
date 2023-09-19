import LandingHeader from './components/LandingHeader'
import BarraMain from './components/BarraMain'
import HeroSection from './components/HeroSection'
import LandingFooter from './components/LandingFooter'

const Anime = () => {
  return (
    <div className="w-screen bg-[url('../../../public/FondoMain.webp')]">
      <LandingHeader />

      <main className='container mx-auto'>
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
