import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Socials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-[95vw] lg:w-[70vw] lg:space-x-10 mx-auto flex justify-between mt-10 items-center">
        <img src="/assets/rarible.jpg" alt="rarible" data-aos="fade-up-right" data-aos-duration="2000" className="w-[6em] lg:w-[10em]" />
        <img src="/assets/opensea.jpg" alt="opensea" data-aos="fade-up" data-aos-duration="2000" className="w-[5em] lg:w-[10em]" />
        <img src="/assets/looksrare.jpg" alt="looksrare" data-aos="fade-down" data-aos-duration="2000" className="w-[5em] lg:w-[10em]" />
        <img src="/assets/icy.jpg" alt="icy" data-aos="fade-up-left" data-aos-duration="2000" className="w-[4em] lg:w-[10em]" />
    </div>
  )
}

export default Socials
