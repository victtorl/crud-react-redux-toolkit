import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addItem } from "../store/postSlice";
import { saveState } from "../store/postSlice";

function FormularioEdit(props: any) {


  const cerrarbien = () => {
    props.cerrarpropFN();
  };
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.itemscard);
  
  useEffect(() => {
    saveState(items);
  }, [items]);




  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(
        addItem({
          title: event.target[0].value,
          description: event.target[1].value,
          url: event.target[2].value,
        })
      );
      cerrarbien();
      setValidated(true);
    }
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);

    event.preventDefault();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Estado de ánimo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="estado de ánimo"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Descripción </Form.Label>

          <textarea
            required
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="descripción"
          
          ></textarea>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Url Yotube</Form.Label>
          <Form.Control type="text" placeholder="url"
         
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3"></Form.Group>
      <Button type="submit">Guardar cambios</Button>
    </Form>
  );
}

export default FormularioEdit;
