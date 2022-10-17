import React from 'react'
import PlusCard from './PlusCard'

const NFTCard = ({ img, header, content }) => {
  return (
      <div className="bg-[#fff] flex flex-col mt-[2vh]">
      <div className="lg:relative">
        <img src={`/assets/img/${img}`} alt="nft" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-75 plusCard transition duration-500 ease-in-out"
        >
          <PlusCard />
          </div>
      </div>
      <h2 className="text-center font-bold text-[18px] mt-8 ">{header}</h2>
      <p className="mb-6 font-[Droid-Serif] text-center uppercase items-center italic text-[#6C757D] text-[16px]">{content}</p>
</div>
  )
}

export default NFTCard
