import { FC, ReactNode } from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
  className: string;
};

const Alert: FC<Props> = ({ children, show, handleClose, className }) => {
  return (
    <Modal show={show} onHide={handleClose} className={className}>
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
