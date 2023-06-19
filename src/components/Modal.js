import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import bg from "/public/assets/bg.jpg";
import { CertificateContext } from "@/context/CertificateProvider";
import Image from "next/image";

const Modal = () => {
  const { modalOpen, setModalOpen } = useContext(CertificateContext);
  console.log(modalOpen);
  return (
    !modalOpen && (
      <>
        <div className="w-full fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-[#00000054] ">
          <div className="relative w-[90%] max-w-[600px] bg-cover rounded-[10px] flex flex-col justify-center items-center overflow-hidden">
            <Image src={bg} alt="bg" className="relative" />
            <div
              className="absolute top-0 right-0 p-[2px] md:p-[4px] bg-[red] text-white text-[13px] min-[425px]:text-[1rem] md:text-[1.5rem] cursor-pointer"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <MdOutlineClose />
            </div>
            <div className="absolute flex flex-col items-center">
              <p className="text-[15px] min-[425px]:text-[18px] md:text-[22px]">
                <span className="text-[15px] min-[425px]:text-[18px] md:text-[30px] font-[800] mr-[8px]">
                  Thin Thiri Hlaing
                </span>
                has completed
              </p>
              <p className="text-[15px] min-[425px]:text-[18px] md:text-[20px] font-[500] text-[#171773cc] my-[10px]">
                <span className="text-[15px] min-[425px]:text-[18px] md:text-[25px] mr-[5px]">
                  Web Development Basic
                </span>
                (Batch- 5)
              </p>
              <p className="text-[9px]  min-[425px]:text-[12px] md:text-[19px]">
                Feb-2 to April-30,2023 at EIT Learning Campus.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
