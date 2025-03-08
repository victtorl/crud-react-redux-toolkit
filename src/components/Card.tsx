import Player from "./Player"

function Card(props:any){

  const urlimagen=props.urlimagen
  const urlmusica=props.urlmusica
  const estadoanimo=props.estadoanimo
  const descestado=props.descestado

    return(



<div className="card  bg-secondary " >
  {/* <img src={urlimagen} className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{estadoanimo}</h5>
    <p className="card-text">{descestado}</p>
      <Player urlvideo={urlmusica} />
  </div>
</div>
  
    )
}

export default Card