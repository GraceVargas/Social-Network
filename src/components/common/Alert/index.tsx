import { FC, ReactNode, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { AlertContext } from "../../../contexts/alerts";

type Props = {
  children: ReactNode;
};

const Alert: FC<Props> = ({ children }) => {
  const { handleClose, show } = useContext(AlertContext);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { Alert };
