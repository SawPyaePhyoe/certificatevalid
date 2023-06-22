//import certificate from "../../../public/images/undraw_Certificate_re_yadi.png";
import Image from "next/image";
import certificate from "../../../public/images/undraw_certificate_re_yadi.svg";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Image src={certificate} alt="" className="w-full  max-w-[250px]" />
      <h1 className="text-[24px]  my-6 opacity-80">Verify Your Certificate</h1>
    </div>
  );
};

export default MainPage;
