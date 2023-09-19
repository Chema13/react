import { Children } from 'react'

const Section = () => {
  const { color, title, subtitle } = Children
  const textColor = `text-${color}`

  return (
    <section
      className='landing-section bg-black h-screen w-screen text-center relative overflow-hidden'
      data-header-section={color}
    >
      <div className='z-30 relative h-full flex flex-col'>
        <header className='text-center'>
          <h2 className={`${textColor} text-[40px] font-medium pt-36`}>
            {title}
          </h2>
          <p className={`${textColor} text-sm`}>{subtitle}</p>
        </header>

        <footer className='flex flex-col flex-grow justify-end pb-24'>
          <div>
            <a
              className='border-[3px] bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white border-white 
                        px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors'
              href='#'
            >
              Demostración de manejo
            </a>
          </div>
        </footer>
      </div>

      <div className='absolute top-0 bottom-0 h-full w-full z-10'>
        <video
          className='object-center object-cover h-full w-full'
          autoPlay
          muted
          loop
          src='../../../public/videoprincipal.webm'
        ></video>
      </div>
    </section>
  )
}

export default Section
