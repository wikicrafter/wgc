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
    <div className="bg-[#212529] w-full">
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
                    Community
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

    </div> 
    )
}

export default NavBar
