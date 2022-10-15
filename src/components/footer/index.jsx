import React from 'react'
import Socials from './Socials'
import Team from './Team'

const Footer = () => {
  return (
    <div>
        <Team />
        <Socials />
        <div className="mt-[10vh]">
                <p className="text-center text-[12px] text-[#5eff5a] my-2">Privacy Policy</p>
                <p className="text-center text-[12px] text-[#5eff5a] my-2">FAQS</p>
                <p className="text-center text-[11px] mb-6">Copyright © Wise Guy Club NFT 2022</p>
        </div>
    </div>
  )
}

export default Footer
