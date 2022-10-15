import React from 'react'
import NFTCard from './NFTCard'

const Examples = () => {
  return (
    <div className="bg-[#F8F9FA] pt-[10vh] pb-[8vh]">
        <h1 className="font-bold text-[40px] uppercase text-center">Examples:</h1>
        <p className="my-3 font-[Droid-Serif] text-center items-center italic text-[#6C757D] text-[16px] mb-[4vh]">Here you will see some minted NFTs on first phase</p>
        <NFTCard
            img="0.png"
            header="First minted NFT"
            content="wgc nft"
        />
        <NFTCard
            img="1.png"
            header="WGC minted NFT"
            content="wgc nft"
        />
        <NFTCard
            img="2.png"
            header="WGC minted NFT"
            content="wgc nft"
        />
        <NFTCard
            img="3.png"
            header="First minted NFT"
            content="wgc nft"
        />
        <NFTCard
            img="4.png"
            header="First minted NFT"
            content="wgc nft"
        />
        <NFTCard
            img="5.png"
            header="First minted NFT"
            content="wgc nft"
        />

    </div>
  )
}

export default Examples
