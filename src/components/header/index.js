import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="bg-[url('/public/assets/header.png')] bg-center h-[40vh] bg-cover bg-no-repeat w-full">
      <NavBar />
      <div className="uppercase items-center bg-[#5eff5a] rounded-lg w-[94vw] mt-[11vh] py-[40px] px-[20px] mx-auto text-[1.75rem] font-bold text-center">
        <h1>Welcome to the wise guy club NFT Project!</h1>
      </div>
    </div>
  )
}

export default Header
