import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateItem } from "../store/postSlice";
import { AppDispatch } from "../store/store";

function FormularioEdit(props: any) {

  const dispatch = useDispatch<AppDispatch>();

  const cerrarbien = () => {
    props.cerrarpropFN();
  };
  const itemedit = useSelector((state: RootState) => state.itemedit);
  
  useEffect(() => {
    console.log(itemedit[0]);
    
  }, [itemedit]);




  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(
        updateItem({
          id:itemedit[0].id,
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
            defaultValue={itemedit[0].title}
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
            defaultValue={itemedit[0].description}
          ></textarea>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Url Yotube</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="url"
          defaultValue={itemedit[0].url}
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
