import Logo from "./Logo"
import { useNavigate } from 'react-router-dom'


const LandingHeader = () => {

    const navigate = useNavigate()

    //Color del header dependiendo de la pagina
    const header = document.querySelector('#landing-header')
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    }
    

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const { isIntersecting } = entry
            if (isIntersecting) {
                const color = entry.target.getAttribute('data-header-section')
                header.style.color = color
            }
        })
    }, observerOptions)

    const sections = document.querySelectorAll('.landing-section')
    sections.forEach(section => observer.observe(section));

    // Transiciones del menu
    const listItem = document.querySelectorAll('#landing-header li')
    const menuBackDrop = document.querySelector('#menu-backdrop')

    listItem.forEach(item => {
        item.addEventListener('mouseenter', ({ target }) => {
            const { left, right, width, height } = target.getBoundingClientRect()
            menuBackDrop.style.setProperty('--left', `${left}px`)
            menuBackDrop.style.setProperty('--right', `${right}px`)
            menuBackDrop.style.setProperty('--width', `${width}px`)
            menuBackDrop.style.setProperty('--height', `${height}px`)
            menuBackDrop.style.opacity = 1
            menuBackDrop.style.visivility = 'visible'
        })
        item.addEventListener('mouseleave', () => {
            menuBackDrop.style.opacity = 0
            menuBackDrop.style.visivility = 'hidden'
        })
    })



    return (
        <header id="landing-header" className="py-3 px-10 flex items-center fixed top-0 w-full justify-start z-40 text-white">

            <div className="flex flex-grow basis-0">
                <Logo />
            </div>

            <nav>
                <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-semibold [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 ">
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Cybertruck </a></li>
                    <li><a href="#">Powerwall </a></li>
                </ul>
            </nav>

            <nav className="flex flex-grow justify-end basis-0">
                <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-semibold [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3">
                    <li><a className="hover:cursor-pointer"
                        onClick={() => navigate('/')}
                    >Regresar</a></li>
                    <li><a href="#">Cuenta</a></li>
                    <li><a href="#">Menú</a></li>
                </ul>
            </nav>

            <div
                id="menu-backdrop"
                className={`
                absolute bg-black/5 backdrop-blur-lg rounded-sm 
                left-[var(--left)] top-[var(--top)]
                w-[var(--width)] h-[var(--height)]
                transition-all duration-500
                ease-in-out opacity-0 -z-10
                `}
            >

            </div>

        </header>
    )
}


export default LandingHeader
