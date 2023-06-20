import "@/styles/globals.css";
import CertificateProvider from "@/Context/CertificateProvider";
import ModalProvider from "@/Context/ModalProvider";

export default function App({ Component, pageProps }) {
  return (
    <CertificateProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </CertificateProvider>
  );
}
