import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
        <div className="bg-[url('/public/assets/header.png')] bg-center relative h-[40vh] bg-cover bg-no-repeat w-full">
        <NavBar />
            <div className="pt-[18vh]">
                <div className="uppercase items-center bg-[#5eff5a] rounded-lg w-[94vw] py-[20px] px-[40px] mx-auto text-[1.75rem] font-bold text-center">
                <h1>Welcome to the wise guy club NFT Project!</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
