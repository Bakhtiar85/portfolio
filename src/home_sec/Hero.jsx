import React, { useRef, useEffect } from 'react';
import Typed from "typed.js";
import user_img from '../assets/imgs/profile_img.webp'

const Hero = () => {
  const langs = useRef(null);
  // https://dev.to/shareef/typing-effect-in-react-with-typed-js-and-hooks-5bl2
  useEffect(() => {
    const typed = new Typed(langs.current, {
      strings: ["HTML, CSS, JS", "Tailwind CSS, Bootstrap", "jQuery, jQuery UI", "MEAN", "MERN", "Next JS"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' name='home' className='md:h-screen h-full md:py-0 w-full item-flexed'>
      <div className='flex flex-col md:gap-24 gap-12 py-20'>
        <div className='grid md:grid-cols-2 items-center text-white text-center md:text-left px-5'>
          <div className=''>
            <p className='ls-1pr md:text-3xl text-lg'>
              <i> Hi! I'm</i>
            </p>
            <h1 className='font-raleway md:text-3xl text-lg'>Muhammad Abubakar Bakhtiar!</h1>
            <p className='ls-1pr md:text-3xl text-lg'>
              <i> Full Stack Web Dev.</i>
            </p>
            <p className="ls-1pr md:text-2xl text-[20px] text-center md:text-left">
              strong work experience <br />
              /<small ref={langs}> React JS Laravel </small>/
            </p>
            <div className='mt-6 py-5 bg-[#1b1b1b] item-flexed gap-3 hover:rounded-md hover:bg-[#4f4f4f] duration-300'>
              <button className='text-[16px]'>
                Let's get started
              </button>
              <div className='mt-[2px]'>
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            {/* className="rounded-[50%] w-[350px] h-[350px] float-right" */}
            <img id='coverimg' src={user_img} alt="user_img" className='float-right' />
          </div>
        </div>
        <div className='text-white text-center md:text-left'>
          <p className="ls-1pr text-2xl">
            Firms & Companies
          </p>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-y-5 mt-5'>
            <a href='https://www.upwork.com/freelancers/~017304c8ed7eb17c49' rel="noreferrer" target='_blank' className='company_logos item-flexed'>
              Upwork
            </a>
            <a href='http://lipsumtechnologies.com/' rel="noreferrer" target='_blank' className='company_logos item-flexed'>
              LipsumTech
            </a>
            <a href='https://seogla.com/' rel="noreferrer" target='_blank' className='company_logos item-flexed'>
              SEOGLA
            </a>
            <a href='https://systemplus.co/' rel="noreferrer" target='_blank' className='company_logos item-flexed'>
              System Plus
            </a>
            <a href='https://codezac.com/' rel="noreferrer" target='_blank' className='company_logos item-flexed'>
              Codezac
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero