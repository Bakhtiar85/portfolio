import React from 'react'
import siteData from '../assets/js/siteData.json';

const Projects = () => {
  return (
    <div id='myProjects' className=' md:h-screen h-full w-full py-20'>
      <div className='max-w-[1000px] mx-auto h-full'>
        <div className="mx-auto text-center mb-7">
          <p className="font-raleway md:text-4xl text-lg text-[#bdbdbd]">
            Recent Projects
          </p>
          <p className='max-w-2xl mx-auto font-ibmPlex ls-1pr lh-24px text-[18px] text-[#e0e0e0] md:px-0 px-2'>
            Find out my recent work below. <br /> Each project is taged with proper information.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:px-0 px-2">
          {
            siteData && siteData[2].map(element => {
              return (
                <div key={element.id} className="relative group overflow-hidden">
                  <div className="skill_div rounded-md py-3">
                    <div>
                      <img src={element.image} alt={element.image} className='max-w-[320px] min-w-[320px] max-h-[250px] min-h-[250px] mx-auto pb-[2px]' />
                    </div>
                    <div>
                      <p className='name font-raleway lh-28px text-center mt-2'>{element.name}</p>
                    </div>
                  </div>
                  <div className="absolute -top-[260px] left-[1px] right-[1px] h-[260px] group-hover:top-[2px] duration-1000 ease-in-out bg-black text-white px-4 py-2 text-justified">
                   <strong> {element.tag}</strong> <br /> {element.des}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects