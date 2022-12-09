import React, { useReducer } from 'react'
import logo from '../assets/imgs/mylogo.webp'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Navbar = () => {

    const [nav, setNav] = useReducer((nav) => !nav, false);

    return (
        <div className='max-w-[1100px] mx-auto rounded-b-lg bg-[#1b1b1b] z-10 fixed top-0 left-0 right-0 h-[70px] item-flexed lg:gap-16 motion-safe:animate-fadeIn'>
            <div className='z-10'>
                <img src={logo} alt="logo" className='md:w-60' />
            </div>
            <div className="hidden md:block">
                <ul className="item-flexed lg:gap-[50px] text-white">
                    <li className='px-2'>Home</li>
                    <li className='px-2'>Case Studies</li>
                    <li className='px-2'>Testimonials</li>
                    <li className='px-2'>Recent Work</li>
                    <li className='px-2 py-1 rounded-sm bg-[#ffffff71] hover:bg-[#ffffffc5]'>Get In Touch</li>
                </ul>
            </div>
            <div className="md:hidden block text-white pr-4 z-10" onClick={setNav}>
                {!nav ? <GiHamburgerMenu /> : <ImCross />}
            </div>
            <ul className={nav ? "fixed top-0 left-0 right-0 bottom-0 bg-black text-center text-3xl flex flex-col justify-center align-center gap-10 mt-5 text-white" : "hidden"}>
                <li>Home</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
                <li>Recent Work</li>
                <li>Get In Touch</li>
            </ul>
        </div>
    )
}

export default Navbar