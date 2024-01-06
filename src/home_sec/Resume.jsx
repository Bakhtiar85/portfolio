import React from 'react'
import resume from '../assets/imgs/makhdoom abubakar.pdf'

const Resume = () => {
    return (
        <div className='banner-btwn md:py-20 py-8 md:px-0 px-2 w-full bg-gray-400 flex flex-col md:flex-row justify-center items-center'>
            <div className='font-raleway md:text-xl text-md h-full md:w-6/12 w-full'>
                <span className=''>Here is my Resume.</span>
            </div>
            <div className='md:w-4/12 w-full mt-6 bg-[#3d3d3d] hover:rounded-md hover:bg-[#191919] duration-300'>
                <a href={resume} className='py-5 text-[16px] font-ibmPlex ls-1pr item-flexed gap-3 mx-auto'>
                    My Resume
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 6 3 L 6 14 L 7.3671875 14 L 8 12.419922 L 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 L 8 21.246094 L 7.9472656 21.193359 L 6.7558594 20 L 6 20 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 L 6 3 z M 20 6.4375 L 22.5625 9 L 20 9 L 20 6.4375 z M 10.96875 10.386719 L 8.6328125 16.21875 L 8.4140625 16 L 2 16 L 2 18 L 7.5859375 18 L 9.3632812 19.78125 L 11.03125 15.613281 L 14.03125 22.613281 L 16.101562 17.4375 L 16.382812 18 L 18.269531 18 C 18.628531 18.617 19.286 19 20 19 C 21.105 19 22 18.105 22 17 C 22 15.895 21.105 15 20 15 C 19.285 15 18.624531 15.383 18.269531 16 L 17.617188 16 L 15.898438 12.5625 L 13.96875 17.386719 L 10.96875 10.386719 z"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Resume