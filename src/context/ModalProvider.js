import { createContext } from "react";

export const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const dateHandler = (dateData) => {
    const date = new Date(dateData);
    const day = date.getHours();
    console.log(day);
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  const getYear = (dateData) => {
    const date = new Date(dateData);
    const year = date.getFullYear();
    return year;
  };
  return (
    <modalContext.Provider
      value={{
        dateHandler,
        getYear,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
