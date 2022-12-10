import React from 'react'
import fp1 from '../assets/imgs/fp1.webp'
import fp2 from '../assets/imgs/fp2.webp'
import fp3 from '../assets/imgs/fp3.png'

const Work = () => {
    return (
        <div id='work' name="work" className='h-full w-full py-16'>
            <div className='max-w-[1000px] mx-auto h-full'>
                <div className="mx-auto text-center mb-14">
                    <p className="font-raleway md:text-4xl text-lg text-[#c0c0c0]">
                        Featured Work
                    </p>
                    <p className='max-w-2xl mx-auto font-ibmPlex ls-1pr lh-24px text-[18px] text-[#9c9c9c] md:px-0 px-2'>
                        Solving user & business problems since last 3+ years. <br /> I love to build CRUD applications for businness of any type. <br /> I build 3 applications for local businness, during Bachelors.
                    </p>
                </div>
                <div className=' flex flex-col justify-evenly gap-20'>
                    <div className="h-full grid md:grid-cols-2 items-center text-white text-center md:text-left px-5">
                        <div className='project_div'>
                            <div className='tag font-ibmPlex lh-24px ls-1pr bg-[#fff6e9] text-[#ffa217]'>Java</div>
                            <div className='name font-raleway lh-28px'>CRM For Dental Workshop</div>
                            <div className='desp md:h-[96px] lg:w-[420px] w-full font-ibmPlex lh-24px ls-1pr'>This was my first project, almost back in 2018. It was just a desktop based CRUD application built using JAVA and couple of third party libraries. The application was operational for a year.</div>
                            <div className='cal_btn mt-8 text-[#fff6e9] bg-[#ac7f3c] hover:bg-[#a06b01] duration-300'>
                                <button className='text-[16px]'>
                                    Learn More
                                </button>
                                <div className='mt-[2px]'>
                                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden mb-4 order-first md:order-last'>
                            <img className='rounded-lg p_img float-right' src={fp1} alt="https://www.grandviewdentalcolorado.com/wp-content/uploads/family-dentist-720.jpg" />
                        </div>
                    </div>
                    <div className="h-full grid md:grid-cols-2 items-center text-white text-center md:text-left px-5">
                        <div className='overflow-hidden mb-4'>
                            <img className='rounded-lg p_img' src={fp2} alt="https://restaurant.eatapp.co/hubfs/Restaurant-Tech-Webinar-Hero.png" />
                        </div>
                        <div className='project_div md:ml-8'>
                            <div className='tag font-ibmPlex lh-24px ls-1pr bg-[#D0E6FF] text-[#000AFF]'>C-Sharp</div>
                            <div className='name font-raleway lh-28px'>CRM For Resturants</div>
                            <div className='desp md:h-[96px] lg:w-[420px] font-ibmPlex lh-24px ls-1pr'>Back in 2018, I started Upwork. And I got a chance to work for a client on his demand, I started working on C#. But after a week the client asks me to leave. So I stoped working. This was 2nd project.</div>
                            <div className='cal_btn mt-8 text-[#D0E6FF] bg-[#000AFF] hover:bg-[#35388f] duration-300'>
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
                    </div>
                    <div className="h-full grid md:grid-cols-2 items-center text-white text-center md:text-left px-5">
                        <div className='project_div'>
                            <div className='tag font-ibmPlex lh-24px ls-1pr bg-[#E0FFF8] text-[#2AB090]'>SMS-API</div>
                            <div className='name font-raleway lh-28px'>CRUD App for Tailors</div>
                            <div className='desp md:h-[96px] lg:w-[420px] font-ibmPlex lh-24px ls-1pr'>This was 3rd saas application I build in my study duration with SMS-API integrated. With the grace of <strong>Allah</strong> it is still working in market. It is also desktop application, built on C-Sharp.</div>
                            <div className='cal_btn mt-8 text-[#E0FFF8] bg-[#2AB090] hover:bg-[#488073] duration-300'>
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
                        <div className='overflow-hidden mb-4 order-first md:order-last'>
                            <img className='rounded-lg p_img float-right' src={fp3} alt="project 1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work