import AOS from "aos";
import "aos/dist/aos.css";
import Data from "../../components/faqs/Data";
import NavBar from "../../components/header/NavBar";
import Socials from "../../components/footer/Socials";
import Link from "next/link";

const FAQs = () => {
  if (typeof window !== "undefined") {
    AOS.init();
  }

  return (
    <div>
      <div className="bg-[#212529]">
        <NavBar />
      </div>
        <div className="lg:w-[70vw] w-[95vw] mx-auto items-center justify-center mt-[15vh]">
          <div className="flex flex-col mx-auto">
            <h2 className="w-[60vw] mx-auto text-2xl lg:text-4xl text-center text-zinc-900 font-bold">
              Frequently Asked Questions
            </h2>
            <div className="mt-[10vh] border-zinc-200 border-b-2"></div>
            <div className="flex flex-col space-y-4">
              <Data />
              <Data />
              <Data />
              <Data />
              <Data />
              <Data />
              <Data />
            </div>
          </div>
        </div>

        <div className="mt-[20vh] lg:flex lg:justify-between lg:w-[60vw] lg:mx-auto">
                <p className="text-center text-[11px] mb-6">Copyright © Wise Guy Club NFT 2022</p>
                <p className="text-center text-[12px] text-[#5eff5a] my-2 lg:my-0 font-bold cursor-pointer">
                  <Link href="/faqs">FAQs</Link>
                </p>
                <p className="text-center text-[12px] text-[#5eff5a] my-2 lg:my-0 font-bold">Privacy Policy</p>
        </div> 
    </div>
  );
};

export default FAQs;
