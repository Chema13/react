const HeroSection = () => {
    return (
        <main>
            <section className="h-screen w-screen flex overflow-hidden text-center">

                <div className="w-[50%] h-screen py-[20%]">
                    <h1 className="text-6xl font-bold">Tu tienda en</h1>
                    <h1 className="text-6xl font-bold">línea al instante</h1>
                    <a className="border-[3px] border-[#595a5d] px-5 py-6" href="#">Quiero información</a>
                    <a href="#">Comprar</a>
                </div>

                <div className="w-[50%]">
                    <img className="h-[85%]" src="../../../../public/carrito.jpg" alt="" />
                </div>

            </section>
        </main>
    )
}

export default HeroSection