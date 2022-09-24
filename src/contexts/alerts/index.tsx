import { createContext, FC, ReactNode } from "react";
import { useAlert } from "../../hooks/useAlert";

type AlertContextType = {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
};

const AlertContext = createContext<AlertContextType>({
  show: false,
  handleClose: () => false,
  handleShow: () => true,
});

type Props = {
  children: ReactNode;
};

const AlertProvider: FC<Props> = ({ children }) => {
  const { handleClose, handleShow, show } = useAlert();

  return (
    <AlertContext.Provider value={{ handleClose, handleShow, show }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
