import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import { FaTwitter } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
    const {ref, inView} = useInView({
        threshold: 0.5,
      })
    
      useEffect(() => {
        if (inView) {
            document.querySelector('#nav5').classList.add('text-[#5eff5a]')
        }
        if (!inView) {
            document.querySelector('#nav5').classList.remove('text-[#5eff5a]')
        }
        }, [inView])

        useEffect(() => {
            AOS.init();
            AOS.refresh();
          }, []);
  return (
    <div className="bg-[#fff] py-[10vh] w-[90vw] lg:w-[70vw] lg:space-x-8 mx-auto" id="team" ref={ref}>
        <h1 className="font-bold text-[40px] uppercase text-center">Team</h1>
        <p className="my-3 font-[Droid-Serif] text-center items-center italic text-[#6C757D] text-[16px] mb-[4vh]">Follow us on our social media. We will appreciate any support towards our project.</p>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-10">
            <div data-aos="fade-up-right" data-aos-duration="2000" className="items-center flex flex-col my-[5vh]">
                <div className="bg-gray-200 h-[18rem] w-[18rem] items-center justify-center flex rounded-full">
                    <img src="/assets/Charly.png" alt="idea" className="h-[17rem] w-[17rem] rounded-full" />
                </div>
                <h2 className="font-bold text-[20px] mt-4">Charly</h2>
                <span className="font-normal text-[11px]">Founder, Developer, Co-artist</span>
                <div className="my-4 text-[23px]">
                    <FaTwitter />
                </div>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000" className="items-center flex flex-col my-[5vh]">
                <div className="bg-gray-200 h-[18rem] w-[18rem] items-center justify-center flex rounded-full">
                    <img src="/assets/Paulinha.jpg" alt="idea" className="h-[17rem] w-[17rem] rounded-full" />
                </div>
                <h2 className="font-bold text-[20px] mt-4">Paulinha</h2>
                <span className="font-normal text-[11px]">Main Artist, Co-founder</span>
                <div className="my-4 text-[23px]">
                    <FaTwitter />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="items-center flex flex-col my-[5vh]">
                <div className="bg-gray-200 h-[18rem] w-[18rem] items-center justify-center flex rounded-full">
                    <img src="/assets/nft_one.jpg" alt="idea" className="h-[17rem] w-[17rem] rounded-full" />
                </div>
                <h2 className="font-bold text-[20px] mt-4">WGC</h2>
                <span className="font-normal text-[11px]">Wise Guy Club Twitter</span>
                <div className="my-4 text-[23px]">
                    <FaTwitter />
                </div>
            </div>
        </div>

        <p data-aos="fade-left" data-aos-duration="2000" className="text-center my-[5vh] text-[11px]">Remember what goes round comes around!</p>
    </div>
  )
}

export default Team
