import Player from "./Player";
import { deleteItem } from "../store/postSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/postSlice";



function Card(props: any) {
  const dispatch = useDispatch<AppDispatch>();

  const urlmusica = props.urlmusica;
  const estadoanimo = props.estadoanimo;
  const descestado = props.descestado;
  const id=props.id

  return (
    <div className="card  bg-secondary mb-4">
      {/* <img src={urlimagen} className="card-img-top" alt="..."/> */}
      <button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteItem(id))} >Eliminar</button>
      <div className="card-body">
        <h5 className="card-title">{estadoanimo}</h5>
        <p className="card-text">{descestado}</p>
        <Player urlvideo={urlmusica} />
      </div>
    </div>
  );
}

export default Card;
