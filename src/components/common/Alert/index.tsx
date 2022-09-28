import { FC, ReactNode } from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
};

const Alert: FC<Props> = ({ children, show, handleClose }) => {
  return (
    <Modal show={show} onClose={handleClose}>
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
