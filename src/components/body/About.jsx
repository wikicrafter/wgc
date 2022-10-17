import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'

const About = () => {
  const {ref, inView} = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
        document.querySelector('#nav3').classList.add('text-[#5eff5a]')
    }
    if (!inView) {
        document.querySelector('#nav3').classList.remove('text-[#5eff5a]')
    }
    }, [inView])
  return (
    <div className="w-[90vw] lg:w-[50vw] mx-auto bg-[#fff] pt-[10vh]" id="about" ref={ref}>
          <h1 className="font-bold text-[40px] uppercase text-center">About Us</h1>
          <p className="my-3 font-[Droid-Serif] text-center items-center italic text-[#6C757D] text-[16px] mb-[4vh]">Our story</p>

        <p className="my-[6vh] text-[11px] font-light text-center">
             Greetings! My name is Charly and I&apos;m passionate about tech, science, art etc. Since I joined to NFT world it become easier for me to make cool things cause NFT is one of the best protocol included on Web3 and it&apos;s 100% blockchain based system. As my research showed me NFT projects really are the game changer on our society. We can use it for support, financial freedom, and many more. This is my second collaborative project with passionate, young great artist Paulina from Ukraine. One day we decided to make that project and we agreed that we would donate through whole sales, including royalties 60% to the Ukraine fund. Verified Address 0x165cd37b4c644c2921454429e7f9358d18a45e14. We added fund address on our SmartContract and as we know it cannot be changed. We are happy that we did it. In the parallel we support some NFT enthusiasts. They are: Lara, Jacky, and Joe. Their address also have been added on our split contract with 2% percentages. Also undoxxed investor who invested on that project before we launched gets some percentages too.
             We need to bring happiness through our project. We will appreciate any support through other peoples too.
        </p>
    </div>
  )
}

export default About
