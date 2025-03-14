import Player from "./Player";
import { deleteItem } from "../store/postSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import ModalEdit from "./ModalEdit";



function Card(props: any) {
  const dispatch = useDispatch<AppDispatch>();


  return (
    <div className="card  bg-secondary ">
      <button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteItem(props.id))} >Eliminar</button>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Player url={props.url} />
      </div>
      <ModalEdit content={props} />
    </div>
  );
}

export default Card;
