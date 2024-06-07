import logo1 from "@/public/images/companies1.png";
import logo2 from "@/public/images/companies2.png";
import logo3 from "@/public/images/companies3.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Company = () => {
  return (
    <>
      <div className="md:px-[5rem] md:mb-5">
        <Marquee speed={30}>
          <Image src={logo1} alt="company" className="h-16 w-auto" />
        </Marquee>
      </div>
      <div className="px-10 md:px-[7rem] md:mb-5">
        <Marquee speed={20}>
          <Image src={logo2} alt="company" className="h-16 w-auto" />
        </Marquee>
      </div>
      <div className="md:px-[5rem]">
        <Marquee speed={35}>
          <Image src={logo3} alt="company" className="h-16 w-auto" />
        </Marquee>
      </div>
    </>
  );
};

export default Company;
