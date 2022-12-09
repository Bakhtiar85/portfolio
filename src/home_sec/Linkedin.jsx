import React from 'react'

const Linkedin = () => {
    return (
        <div className='banner-btwn md:py-20 py-8 md:px-0 px-2 w-full bg-gray-400 flex flex-col md:flex-row justify-center items-center'>
            <div className='font-raleway md:text-xl text-lg h-full md:w-6/12 w-full'>
                Linked In<br /> Visit my profile.
            </div>
            <div className='md:w-4/12 w-full mt-6 bg-[#3d3d3d] hover:rounded-md hover:bg-[#191919] duration-300'>
                <a href='https://www.linkedin.com/in/makhdoom-abubakar' target='_blank' rel="noreferrer" className='py-5 text-[16px] font-ibmPlex ls-1pr item-flexed gap-3 mx-auto'>
                    Me @ LinkedIn 
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </div>
        </div>
    )
}

export default Linkedin