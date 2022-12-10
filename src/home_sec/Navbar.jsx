import React, { useReducer } from 'react'
import logo from '../assets/imgs/mylogo.webp'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

// react scroll
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useReducer((nav) => !nav, false);

    return (
        <div className='max-w-[1100px] mx-auto rounded-b-lg bg-[#1b1b1b] z-10 fixed top-0 left-0 right-0 h-[70px] item-flexed lg:gap-16 motion-safe:animate-fadeIn'>
            <div className='z-10'>
                <img src={logo} alt="logo" className='md:w-60' />
            </div>
            <div className="hidden md:block">
                <ul className="item-flexed lg:gap-[50px] text-white">
                    <li className='px-2 hover:font-semibold cursor-pointer'>
                        <Link spy={true} smooth={true} duration={500} to='home'>Home</Link>
                    </li>
                    <li className='px-2 hover:font-semibold cursor-pointer'>
                        <Link spy={true} smooth={true} duration={500} to='work'>Featured Work</Link>
                    </li>
                    <li className='px-2 hover:font-semibold cursor-pointer'>
                        <Link spy={true} smooth={true} duration={500} to='skills'>Skills</Link>
                    </li>
                    <li className='px-2 hover:font-semibold cursor-pointer'>
                        <Link spy={true} smooth={true} duration={500} to='projects'>Projects</Link>
                    </li>
                    <li className='px-2 hover:font-semibold cursor-pointer py-1 rounded-sm bg-[#ffffff71] hover:bg-[#ffffffc5]'>
                        <Link spy={true} smooth={true} duration={500} to='contact'>Get In Touch</Link>
                    </li>
                </ul>
            </div>
            <div className="md:hidden block text-white pr-4 z-10" onCLinkck={setNav}>
                {!nav ? <GiHamburgerMenu /> : <ImCross />}
            </div>
            <ul className={nav ? "fixed top-0 left-0 right-0 bottom-0 bg-black text-center text-3xl flex flex-col justify-center aLinkgn-center gap-10 mt-5 text-white" : "hidden"}>
                <Link>Home</Link>
                <Link>Case Studies</Link>
                <Link>Testimonials</Link>
                <Link>Recent Work</Link>
                <Link>Get In Touch</Link>
            </ul>
        </div>
    )
}

export default Navbar