import React from 'react'

const Touch = () => {

    const getInTouch= () =>{
        var name = document.getElementById('u_name').value;
        alert('Hi '+name+', The Form is out of order. Try to reach me using my email or whatsapp. Thanks.')
    }
    
    return (
        <div id='getInTouch' className=' md:h-screen h-full w-full py-20'>
            <div className='max-w-[1000px] mx-auto h-full flex flex-col justify-center'>
                <div className="grid md:grid-cols-2 items-center text-white text-center md:text-left px-5">
                    <div className="col-span-1">
                        <p className="font-raleway md:text-3xl text-xl text-[#c0c0c0]">
                            Love to read from you.
                        </p>
                        <p className="font-ibmPlex lh-24px ls-1pr text-[18px] md:pr-6 text-justify">
                            Just drop me a message here or find my CV and send me direct email or message on WhatsApp. You can call me directly on my given contact number.
                        </p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-md p-8">
                        <div className="mx-auto w-full px-2">
                            <p className="mb-2 text-2xl">
                                Get In Touch!
                            </p>
                            <form id='contact_me'>
                                <div className="flex flex-col justify-center align-center gap-4">
                                    <input id='u_name' type="text" placeholder='Your Sweet Name!' />
                                    <input type="email" placeholder='Your Email Address!' />
                                    <input type="phone" placeholder='Your Contact Number!' />
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message here!'></textarea>
                                    <button className="px-2 py-4 border-2 hover:rounded-md hover:bg-[#ffffff1a] duration-200" type='button'  onClick={getInTouch}>
                                        Drop the Message.
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Touch