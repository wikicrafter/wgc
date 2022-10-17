import React, { useEffect } from 'react'
import PlusCard from './PlusCard'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'


const NFTCard = ({ img, header, content, mintedBy, other }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
      <div className="bg-[#fff] flex flex-col mt-[2vh]">
        {/* Desktop */}
      <div data-aos="flip-left" data-aos-duration="2000" className="lg:relative lg:block hidden">
        <img src={`/assets/img/${img}`} alt="nft" className="w-full" onClick={onOpen} />
        <div 
        onClick={onOpen}
        className="lg:absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-75 plusCard transition duration-1000 ease-in-out cursor-pointer"
        >
          <PlusCard />
          </div>
        <h2 className="text-center font-bold text-[18px] mt-8 ">{header}</h2>
        <p className="mb-6 font-[Droid-Serif] text-center uppercase items-center italic text-[#6C757D] text-[16px]">{content}</p>
      </div>


      {/* Mobile */}
      <div className="lg:hidden">
        <img src={`/assets/img/${img}`} alt="nft" className="w-full" onClick={onOpen} />
        <div 
        onClick={onOpen}
        className="lg:absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-75 plusCard transition duration-1000 ease-in-out cursor-pointer"
        >
          <PlusCard />
          </div>
      <h2 className="text-center font-bold text-[18px] mt-8 ">{header}</h2>
      <p className="mb-6 font-[Droid-Serif] text-center uppercase items-center italic text-[#6C757D] text-[16px]">{content}</p>
      </div>
      

      {/* Modal */}
      <div className="modal">
        <Modal onClose={onclose} isOpen={isOpen} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{header}</ModalHeader>
            <ModalBody>
              <div className="flex space-x-4">
                <div className="flex flex-col w-[50%] items-center space-y-2">
                  <img src={`/assets/img/${img}`} alt="nft" className="" />
                  <p className="font-[Droid-Serif] text-[14px] italic text-[#6C757D]">{other}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-bold text-[18px]">{header}</p>
                  <p className="font-[Droid-Serif] text-[14px] italic text-[#6C757D]">This is the WGC NFT minted online through our minting dApp</p>

                  <div className="flex flex-col mt-8">
                    <p className="font-bold text-[14px]">Minted by:</p>
                    <span className="font-[Droid-Serif] text-[14px] italic text-[#6C757D]">{mintedBy}</span>
                  </div>

                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="flex space-x-4">
                <button className="bg-[#5eff5a] shadow-lg p-2 text-[11px] font-semibold rounded-md">Mint unique one</button>
                <Button onClick={onClose}>Close</Button>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
</div>
  )
}

export default NFTCard
