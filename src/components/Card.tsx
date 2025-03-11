import Player from "./Player";
import { deleteItem } from "../store/postSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/postSlice";
import ModalEdit from "./ModalEdit";



function Card(props: any) {
  const dispatch = useDispatch<AppDispatch>();

  const urlmusica = props.urlmusica;
  const estadoanimo = props.estadoanimo;
  const descestado = props.descestado;
  const id=props.id

  return (
    <div className="card  bg-secondary ">
      <button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteItem(id))} >Eliminar</button>
      <div className="card-body">
        <h5 className="card-title">{estadoanimo}</h5>
        <p className="card-text">{descestado}</p>
        <Player urlvideo={urlmusica} />
      </div>
      <ModalEdit content={props} />
    </div>
  );
}

export default Card;
