import Modal from "@/components/Modal";
import CertificateProvider from "@/context/CertificateProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <h1>Thin</h1> */}
      <CertificateProvider>
        <Modal />
      </CertificateProvider>
    </>
  );
}
