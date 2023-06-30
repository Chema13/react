import LandingHeader from "./components/LandingHeader";
import HeroSection from "./components/HeroSection";
import ModelY from "./components/ModelY";

const Tesla = () => {

    return (
        <>
            <LandingHeader />
            <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
                <div className="snap-center">
                    <HeroSection />
                </div>
                <div className="snap-center">
                    <ModelY />
                </div>
                <div className="snap-center">
                    <HeroSection />
                </div>
                <div className="snap-center">
                    <ModelY />
                </div>
            </main>
        </>
    );
};

export default Tesla;
