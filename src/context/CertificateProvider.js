import { createContext, useState } from "react";

export const CertificateContext = createContext();
function CertificateProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <CertificateContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </CertificateContext.Provider>
  );
}
export default CertificateProvider;
