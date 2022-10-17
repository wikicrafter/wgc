import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import StageCard from './StageCard'
import AOS from "aos";
import "aos/dist/aos.css";

const Stages = () => {
    const {ref, inView} = useInView({
        threshold: 0.5,
      })
    
      useEffect(() => {
        if (inView) {
            document.querySelector('#nav4').classList.add('text-[#5eff5a]')
        }
        if (!inView) {
            document.querySelector('#nav4').classList.remove('text-[#5eff5a]')
        }
        }, [inView])

        useEffect(() => {
            AOS.init();
            AOS.refresh();
          }, []);
  return (
    <div className="bg-[#F8F9FA] py-[6vh]" id="stages">
        <div data-aos="zoom-in-up" data-aos-duration="1500">
            <h1 className="font-bold text-[40px] uppercase text-center" ref={ref}>Stages</h1>
            <p className="my-3 font-[Droid-Serif] text-center items-center italic text-[#6C757D] text-[16px] mb-[4vh]">Processes which passing through this project</p>
        </div>
        {/* Mobile */}
       <div className="w-[90vw] mx-auto pt-10 lg:hidden">
            <StageCard
                timeline="September 2022"
                header="Our Humble Beginning"
                content="Split Contract on etheruem blockchain"
            />
            <StageCard
                header="Stage 2:"
                content="Creation of unique art!"
            />
            <StageCard
                header="Stage 3:"
                content="NFT items upload on IFPS"
            />
            <StageCard
                header="Stage 4:"
                content="Setting up our website including with NFT minting dApp"
            />
            <StageCard
                header="Stage 5:"
                content="NFT minting process from us"
            />
            <StageCard
                header="Stage 6:"
                content="Our participants gonna be whitelisted with 50% discount till 9/20/2022. For more information about participation follow us on Twitter."
            />
            <StageCard
                header="Stage 7:"
                content="11200 NFT items on public mint under 0.04ETH"
            />
            <div data-aos="fade-up" data-aos-duration="2000" className="bg-gray-200 h-[6rem] w-[6rem] items-center justify-center flex rounded-full">
                <div className="bg-[#5eff5a] h-[5.5rem] w-[5.5rem] rounded-full flex justify-center items-center text-center text-[#fff] text-[10px] font-bold">
                    <span>Be Part of Our story!</span>
                </div>
            </div>
       </div>


               {/* Desktop */}

        <div className="hidden lg:flex lg:flex-col items-center justify-center">
            <StageCard
                timeline="September 2022"
                header="Our Humble Beginning"
                content="Split Contract on etheruem blockchain"
            />
            <StageCard
                header="Stage 2:"
                content="Creation of unique art!"
            />
             <StageCard
                header="Stage 3:"
                content="NFT items upload on IFPS"
            />
            <StageCard
                header="Stage 4:"
                content="Setting up our website including with NFT minting dApp"
            />
            <StageCard
                header="Stage 5:"
                content="NFT minting process from us"
            />
            <StageCard
                header="Stage 6:"
                content="Our participants gonna be whitelisted with 50% discount till 9/20/2022. For more information about participation follow us on Twitter."
            />
            <StageCard
                header="Stage 7:"
                content="11200 NFT items on public mint under 0.04ETH"
            />
            <div data-aos="fade-up" data-aos-duration="2000" className="w-[30vw] pl-[3%]">
                <div className="bg-gray-200 h-[12rem] w-[12rem] items-center justify-center flex rounded-full">
                    <div className="bg-[#5eff5a] h-[11rem] w-[11rem] rounded-full flex justify-center items-center text-center text-[#fff] text-[10px] font-bold">
                        <span>Be Part of Our story!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stages
