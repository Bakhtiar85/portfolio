import React from 'react'

const Upwork = () => {
    return (
        <div className='banner-btwn md:py-20 py-8 md:px-0 px-2 w-full bg-gray-400 flex flex-col md:flex-row justify-center items-center'>
            <div className='font-raleway md:text-xl text-lg h-full md:w-6/12 w-full'>
                Upwork is a good platform for <i>Projects.</i> <br /> Visit my profile.
            </div>
            <div className='md:w-4/12 w-full mt-6 bg-[#3d3d3d] hover:rounded-md hover:bg-[#191919] duration-300'>
                <a href='https://www.upwork.com/freelancers/~017304c8ed7eb17c49' rel="noreferrer" target='_blank' className='py-5 text-[16px] font-ibmPlex ls-1pr item-flexed gap-3 mx-auto'>
                    Upwork Profile
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor"><title>Upwork</title><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Upwork