import Link from 'next/link'
import React from 'react'
import Socials from './Socials'
import Team from './Team'

const Footer = () => {
  return (
    <div>
        <Team />
        <Socials />
        <div className="mt-[10vh] mb-[3vh] lg:flex lg:justify-between lg:w-[60vw] lg:mx-auto">
                <p className="text-center text-[11px] mb-6">Copyright © Wise Guy Club NFT 2022</p>
                <p className="text-center text-[12px] text-[#5eff5a] my-2 lg:my-0 font-bold cursor-pointer">
                  <Link href="/faqs">FAQs</Link>
                </p>
                <p className="text-center text-[12px] text-[#5eff5a] my-2 lg:my-0 font-bold cursor-pointer">
                  <Link href="/legal">Privacy Policy</Link>
                </p>
        </div>

        
    </div>
  )
}

export default Footer
