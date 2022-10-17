import React, { useEffect } from 'react'
import NFTCard from './NFTCard'
import { useInView } from 'react-intersection-observer'

const Examples = () => {
    const {ref, inView} = useInView({
    threshold: 0.5,
  })


  useEffect(() => {
    if (inView) {
        document.querySelector('#nav2').classList.add('text-[#5eff5a]')
    }
    if (!inView) {
        document.querySelector('#nav2').classList.remove('text-[#5eff5a]')
    }
    }, [inView])
  return (
    <div className="bg-[#F8F9FA] pt-[10vh] pb-[8vh]" id="examples" ref={ref}>
        <h1 className="font-bold text-[40px] uppercase text-center">Examples:</h1>
        <p className="my-3 font-[Droid-Serif] text-center items-center italic text-[#6C757D] text-[16px] mb-[4vh]">Here you will see some minted NFTs on first phase</p>
        <div className="w-[95vw] mx-auto flex flex-col lg:w-[70vw] lg:grid lg:grid-cols-3 lg:gap-x-6">
            <NFTCard
                img="0.png"
                header="First minted NFT"
                content="wgc nft"
                mintedBy="Charly"
                other="First unique NFT"
            />
            <NFTCard
                img="1.png"
                header="WGC minted NFT"
                content="wgc nft"
                mintedBy="Charly"
                other=" unique NFT"
            />
            <NFTCard
                img="2.png"
                header="WGC minted NFT"
                content="wgc nft"
                mintedBy="Paulinha"
                other="unique NFT"
            />
            <NFTCard
                img="3.png"
                header="First minted NFT"
                content="wgc nft"
                mintedBy="Joe"
                other="First unique NFT"
            />
            <NFTCard
                img="4.png"
                header="First minted NFT"
                content="wgc nft"
                mintedBy="Lara"
                other="First unique NFT"
            />
            <NFTCard
                img="5.png"
                header="First minted NFT"
                content="wgc nft"
                mintedBy="Paulinha"
                other="First unique NFT"
            />
        </div>

    </div>
  )
}

export default Examples
