import CertificateProvider from "@/Context/CertificateProvider";
import ModalProvider from "@/Context/ModalProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <CertificateProvider>
        <Component {...pageProps} />
      </CertificateProvider>
    </ModalProvider>
  );
}
