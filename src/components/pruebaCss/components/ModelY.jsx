

const ModelY = () => {
    return (
        <section 
            className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden"
            data-header-section="black"
            >

            <div className="z-30 relative h-full flex flex-col">
                <header className="text-center">
                    <h2 className="text-black text-[40px] font-medium pt-36">Model Y</h2>
                    <p className="text-black text-sm underline">Agenda una demostración de manejo hoy</p>
                </header>

                <footer className="flex flex-col flex-grow justify-end pb-24">
                    <div className="gap-x-4 flex mx-auto">
                        <a
                            className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-[#595a5d] hover:text-white inline-flex justify-center items-center text-black"
                            href="#"
                        >
                            Explorar inventario</a
                        >
                        <a
                            className="border-[3px] border-[#595a5d] bg-[#595a5d] text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                            href="#"
                        >
                            Pedido personalizado</a
                        >

                    </div>
                </footer>
            </div>

            <div className="absolute top-0 bottom-0 h-full w-full z-10">
                <img className="object-center object-cover h-full w-full" src="../../../../public/ModelY.webp"></img>
            </div>

        </section>
    )
}

export default ModelY