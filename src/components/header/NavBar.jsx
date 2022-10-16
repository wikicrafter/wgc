import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>


    {/**Mobile Navbar */}
    <div className="bg-[#212529] w-full fixed top-0 lg:hidden md:hidden">
    <div className="w-[95vw] py-[12px] mx-auto items-center flex justify-between text-[#5eff5a]">
        <h2 className="italic text-[15px] font-semibold font-[Kaushan-Script]">Wise Guy Club NFT</h2>   
        <div className="lg:hidden md:hidden">
          <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
            <div className="bg-[#5eff5a] text-[#fff] flex space-x-1 uppercase items-center p-[13px] rounded-md">
                <span className="text-[12px]">Menu</span>
                <FaBars />
            </div>
        </Button>
    </div>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay
          size='md'
          top='50px'
          />
          <DrawerContent
          bg='transparent'
          mt='50px'
          >
            <DrawerCloseButton />
            <DrawerBody
            py="1vh"
            px="2vw"
            bg='#212529'
            >
              <div className="flex flex-col space-y-6 font-[Montserrat] text-[11px] text-white uppercase">
                <a href="#goal">
                    Goal
                </a>
                <a href="#examples">
                    Examples
                </a>
                <a href="#about">
                    About Us
                </a>
                <a href="#stage">
                    Stages
                </a>
                <a href="#team">
                    Team
                </a>
                <a href="#mint">
                    Mint
                </a>
              </div>
            </DrawerBody>
          </DrawerContent>
            
        </Drawer>

            </div>
    </div>


      {/**Desktop NavBar */}
      <div className="bg-transparent w-[70vw] mx-auto pt-10 hidden lg:flex justify-between items-center">
        <h2 className="italic text-[21px] font-semibold font-[Kaushan-Script] text-[#5eff5a]">Wise Guy Club NFT</h2>
        <div className="flex space-x-6 font-[Montserrat] text-[11px] text-white uppercase">
            <a href="#goal" className="hover:text-[#5eff5a]">
                Goal
            </a>
            <a href="#examples" className="hover:text-[#5eff5a]">
                Examples
            </a>
            <a href="#about" className="hover:text-[#5eff5a]">
                About Us
            </a>
            <a href="#stage" className="hover:text-[#5eff5a]">
                Stages
            </a>
            <a href="#team" className="hover:text-[#5eff5a]">
                Team
            </a>
            <a href="#mint" className="hover:text-[#5eff5a]">
                Mint
            </a>
        </div>
      </div>

    </div> 
    )
}

export default NavBar
