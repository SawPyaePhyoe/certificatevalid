import "@/styles/globals.css";
import CertificateProvider from "@/context/CertificateProvider";
import ModalProvider from "@/context/ModalProvider";

export default function App({ Component, pageProps }) {
  return (
    <CertificateProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </CertificateProvider>
  );
}
