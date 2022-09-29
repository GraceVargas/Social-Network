import { createContext, FC, ReactNode, useState } from "react";
import { Alert } from "../../components/common";
import { useAlert } from "../../hooks/useAlert";

type AlertContextType = {
  setContent: (text: string) => void;
  handleClose: () => void;
  handleShow: () => void;
  setAlertType: (type: string) => void;
};

const AlertContext = createContext<AlertContextType>({
  setContent: () => {},
  handleClose: () => {},
  handleShow: () => {},
  setAlertType: () => {},
});

type Props = {
  children: ReactNode;
};

const AlertProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState("default");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleShow = () => {
    setIsOpen(true);
  };

  const setContent = (text: string) => {
    setText(text);
  };

  const setAlertType = (type: string) => {
    setType(type);
  };

  return (
    <AlertContext.Provider
      value={{ handleClose, handleShow, setContent, setAlertType }}
    >
      {children}
      <Alert show={isOpen} handleClose={handleClose} className={type}>
        {text}
      </Alert>
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
