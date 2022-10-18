import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  const goToGoal = () => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    })
  }
  return (
    <div>
        <div className="bg-[url('/assets/header.png')] bg-center relative h-[50vh] bg-cover bg-no-repeat w-full lg:h-[76vh]">
        <NavBar />
            <div className="pt-[18vh] lg:pt-[32vh]">
                <div
                onClick={goToGoal} 
                className="uppercase items-center bg-[#5eff5a] rounded-lg w-[94vw] py-[20px] px-[40px] mx-auto text-[1.75rem] cursor-pointer font-bold text-center lg:w-[45vw]">
                <h1>Welcome to the wise guy club NFT Project!</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
