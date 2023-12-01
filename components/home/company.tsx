import logo1 from "@/public/images/company1.png";
import logo2 from "@/public/images/company2.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Company = () => {
  return (
    <>
      <div className="md:px-[5rem]">
        <Marquee speed={30}>
          <Image src={logo1} alt="company" />
        </Marquee>
      </div>
      <div className="px-10 md:px-[7rem]">
        <Marquee speed={20}>
          <Image src={logo2} alt="company" />
        </Marquee>
      </div>
    </>
  );
};

export default Company;
