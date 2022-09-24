import { useState } from "react";

const useAlert = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return { handleClose, handleShow, show };
};

export { useAlert };
