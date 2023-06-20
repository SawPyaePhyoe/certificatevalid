import certificate from "../../../public/images/undraw_Certificate_re_yadi.png";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Image src={certificate} alt="" className="w-full  max-w-[346px]" />
      <h1 className="text-[24px]  mb-6 opacity-80">Verify Your Certificate</h1>
    </div>
  );
};

export default MainPage;
