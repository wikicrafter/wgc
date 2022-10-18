import React, { useEffect } from 'react'
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
import Link from 'next/link'
const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const goToSection = (section) => {
      document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' })
    }

    if (typeof window !== 'undefined') {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById("navbar").classList.add("fixed", "top-0" , "left-0", "right-0", "z-50", "bg-[#212529]", "animate__animated", "animate__fadeInDown")
            document.getElementById("navbar").classList.remove("animate__animated" , "animate__fadeOutUp")
            document.getElementById("navbar").style.transition = "all 0.5s ease-in-out"
        } else {
            document.getElementById("navbar").classList.remove("fixed", "top-0", "left-0", "right-0", "z-50", "bg-[#212529]", "animate__animated", "animate__fadeInDown")
            document.getElementById("navbar").classList.add("animate__animated", "animate__fadeOutUp")
            document.getElementById("navbar").style.transition = "all 0.5s ease-in-out"
        }
    }
    }

    useEffect(() => {
    

    goToSection('#home')
    }, [])
  return (
    <div>


    {/**Mobile Navbar */}
    <div className="bg-[#212529] w-full fixed top-0 lg:hidden ">
    <div className="w-[95vw] py-[12px] mx-auto items-center flex justify-between text-[#5eff5a]">
        <h2 className="italic text-[15px] font-semibold font-[Kaushan-Script]"><Link href="/" passHref>Wise Guy Club NFT</Link></h2>   
        <div className="lg:hidden ">
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
              <div className="flex flex-col space-y-6 font-[Montserrat] cursor-pointer text-[11px] text-white uppercase">
                <span onClick={() => goToSection('#goal')}>
                    Goal
                </span>
                <span onClick={() => goToSection('#examples')}>
                    Examples
                </span>
                <span onClick={() => goToSection('#about')}>
                    About Us
                </span>
                <span onClick={() => goToSection('#stages')}>
                    Stages
                </span>
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
      <div className="" id="navbar">
      <div className="bg-transparent w-[70vw] mx-auto py-4 hidden lg:flex justify-between items-center">
        <h2 className="italic text-[21px] font-semibold font-[Kaushan-Script] text-[#5eff5a]"><Link href="/" passHref>Wise Guy Club NFT</Link></h2>
        <div className="flex space-x-6 font-[Montserrat] text-[11px] text-white uppercase">
          <span id="nav1" onClick={() => goToSection('#goal')} className="hover:text-[#5eff5a] cursor-pointer">
                Goal
            </span>
            <span id="nav2" onClick={() => goToSection('#examples')} className="hover:text-[#5eff5a] cursor-pointer">
                Examples
            </span>
            <span id="nav3" onClick={() => goToSection('#about')} className="hover:text-[#5eff5a] cursor-pointer">
                About Us
            </span>
            <span id="nav4" onClick={() => goToSection('#stages')} className="hover:text-[#5eff5a] cursor-pointer">
                Stages
            </span>
            <span id="nav5" onClick={() => goToSection('#team')} className="hover:text-[#5eff5a] cursor-pointer">
                Team
            </span>
            <a href="#mint" className="hover:text-[#5eff5a]">
                Mint
            </a>
        </div>
      </div>
      </div>

    </div> 
    )
}

export default NavBar
