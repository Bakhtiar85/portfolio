import siteData from '../assets/js/siteData.json';

const Skills = () => {
    return (
        <div id='skills' name="skills" className='h-full w-full py-20'>
            <div className='max-w-[1000px] mx-auto h-full'>
                <div className="mx-auto text-center mb-7">
                    <p className="font-raleway md:text-4xl text-lg text-[#bdbdbd]">
                        Skills & Experties
                    </p>
                    <p className='max-w-2xl mx-auto font-ibmPlex ls-1pr lh-24px text-[18px] text-[#e0e0e0] md:px-0 px-2'>
                        I am good in doing Web Frontend and Backend. <br /> Although, I have worked on different tools and techs but now love to build websites using <i className='font-semibold underline'> Next JS </i> and <i className='font-semibold underline'> Tailwind CSS</i>.
                    </p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:px-0 px-2">
                    {
                        siteData && siteData[1].map(element => {
                            return (
                                <div key={element.id} className="skill_div rounded-md py-3 flex flex-col justify-center">
                                    <img src={element.image} alt="img1" className='max-w-[140px] max-h-[140px] mx-auto pb-[2px]' />
                                    <p className='name font-raleway lh-28px text-center mt-2'>{element.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills