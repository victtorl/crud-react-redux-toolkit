import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioEdit from './FormularioEdit';
import { AppDispatch, RootState, setItem } from "../store/stageSlice";
import { useDispatch, useSelector } from "react-redux";


function ModalEdit(props:any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch<AppDispatch>();
  const sendInfoItem=() => {
    handleShow()
    //enviar al store
    console.log(props.content)
    dispatch(setItem(props.content))

  }


  return (
    <>
      <Button variant="success" onClick={sendInfoItem}>
        + Editar canción
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormularioEdit  cerrarpropFN={handleClose} />
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

export default ModalEdit;