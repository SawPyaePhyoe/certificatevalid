import { createContext, useState } from "react";

export const certificateContext = createContext();

const CertificateProvider = ({ children }) => {
  const [modal, setmodal] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(false);
  const [invalidID, setInvalidID] = useState(false);

  const ErrorHandler = () => {
    setError(false);
    setInvalidID(false);
  };

  const getAllCertificate = async (cerId) => {
    const res = await fetch(
      `https://api.eitlearningcampus.org/api/v1/public/certificate/check/${cerId}`,
      {
        headers: {
          Key: "I069fUF1Xg69OI2JWTrRPWLbMUB1p7NCUsTJc+sbR0k=",
        },
      }
    );

    const { certificate } = await res.json();
    console.log(certificate);
    if (res.ok) {
      setStudentData(certificate);
      setInvalidID(false);
      setmodal(!modal);
    } else {
      setInvalidID(true);
    }
  };

  return (
    <certificateContext.Provider
      value={{
        studentData,
        setStudentData,
        error,
        setError,
        invalidID,
        setInvalidID,
        ErrorHandler,
        getAllCertificate,
        modal,
        setmodal,
      }}
    >
      {children}
    </certificateContext.Provider>
  );
};

export default CertificateProvider;
