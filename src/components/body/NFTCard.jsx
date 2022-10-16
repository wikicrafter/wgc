import React from 'react'

const NFTCard = ({ img, header, content }) => {
  return (
      <div className="bg-[#fff] flex flex-col mt-[2vh]">
      <img src={`/assets/img/${img}`} alt="nft" />
      <h2 className="text-center font-bold text-[18px] mt-8 ">{header}</h2>
      <p className="mb-6 font-[Droid-Serif] text-center uppercase items-center italic text-[#6C757D] text-[16px]">{content}</p>
</div>
  )
}

export default NFTCard
