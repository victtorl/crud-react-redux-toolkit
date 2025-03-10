import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormExample from './Formulario';

function ModalAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        + Agregar canción
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar canción nueva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormExample  cerrarpropFN={handleClose} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalAdd;