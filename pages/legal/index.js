import Link from 'next/link'
import React from 'react'
import NavBar from '../../components/header/NavBar'
import Meta from '../defaults/Meta'


const Legal = () => {
  return (
    <div>
      <Meta title="Privacy Policy" />
      <div className="bg-[#212529]">
        <NavBar />
      </div>
        <div className="lg:w-[70vw] w-[95vw] mx-auto items-center justify-center mt-[15vh]">
          <div className="flex flex-col mx-auto">
            <h2 className="w-[60vw] mx-auto text-2xl uppercase lg:text-4xl text-center text-zinc-900 font-bold">
                Privacy Policy
            </h2>
            <div className="flex flex-col mt-10 text-[11px] space-y-4">
                <span>This Privacy Policy describes how your personal information is collected, used and shared when you visit Wise Guy Club NFT</span>
                <h2 className="font-bold text-[14px] uppercase"> Privacy Information we collect </h2>
                <span>We do not collect about you any data</span>
                <h2 className="font-bold text-[14px] uppercase"> Changes </h2>
                <span>We may update this privacy policy from time to time for personal, operational, we may update website too just keep in touch with us!</span>
                <h2 className="font-bold text-[14px] uppercase"> Contact Us </h2>
                <span>For more additional information you can contact us! 
                    <a href="mailto:charlyesnft@gmail.com" className="text-[#5eff5a]"> charlyesnft@gmail.com</a>
                </span>

            </div>        
          </div>
        </div>

        <div className="mt-[20vh] mb-[3vh] lg:flex lg:justify-between lg:w-[60vw] lg:mx-auto">
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

export default Legal
