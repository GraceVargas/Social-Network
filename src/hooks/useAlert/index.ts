import { useContext } from "react";
import { AlertContext } from "../../contexts";

const useAlert = () => {
  const { setAlertType, handleShow, setContent} = useContext(AlertContext);

  const showAlert = ({text, type}: {text: string, type?: string}) => {
    setContent(text);
    handleShow();
    type && setAlertType(type)
  }

  return { showAlert };
};

export { useAlert };
