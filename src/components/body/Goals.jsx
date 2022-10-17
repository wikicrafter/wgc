import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Goals = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
        document.querySelector('#nav1').classList.add('text-[#5eff5a]')
    }
    if (!inView) {
        document.querySelector('#nav1').classList.remove('text-[#5eff5a]')
    }
    }, [inView])
  return (
    <div className="mt-[10vh] lg:mb-[10vh] w-[90vw] lg:w-[70vw] mx-auto" id="goal" ref={ref}>
        <h2 className="uppercase text-[40px] font-bold text-center">Our Goal is:</h2>
        <p className="my-3 font-[Droid-Serif] text-center items-center italic text-[#6C757D] text-[16px]">To make life better together</p>
        <div className="flex flex-col lg:flex-row mt-[8vh] items-center">
            <div className="flex flex-col items-center">
                <div className="bg-[#5eff5a] h-[8rem] w-[8rem] rounded-full"></div>
                <h2 className="font-bold text-center my-4 lg:my-0 text-[18px]">Supportive</h2>
                <span className="text-[#6C757D] text-[12px] px-3 mb-10 lg:mb-0 text-center">
                    Non-fungible tokens are one of the hottest things in crypto world environment right now. We created one of the serious supportive NFT collection.
                </span>
            </div>

            <div className="flex flex-col items-center">
                <div className="bg-[#5eff5a] h-[8rem] w-[8rem] rounded-full"></div>
                <h2 className="font-bold text-center my-4 lg:my-0 text-[18px]">Quality</h2>
                <span className="text-[#6C757D] text-[12px] px-3 text-center mb-10 lg:mb-0">
                    Anything worth doing is worth doing right the first time. So we was working to make our projects quality as cool as possible. We believe we did it!
                </span>
            </div>

            <div className="flex flex-col items-center">
                <div className="bg-[#5eff5a] h-[8rem] w-[8rem] rounded-full"></div>
                <h2 className="font-bold text-center my-4 lg:my-0 text-[#5eff5a] text-[18px]">
                    <a href="https://en.wikipedia.org/wiki/Web3" target="_blank" rel="noreferrer">Web3</a>
                </h2>
                <span className="text-[#6C757D] text-[12px] px-3 text-center mb-[10vh] lg:mb-0">
                    Web 3 is an internet owned by users and builders orchestrated with tokens. We want to share our great NFT project and we aspire to build real community.
                </span>
            </div>
        </div>

    </div>
  )
}

export default Goals
