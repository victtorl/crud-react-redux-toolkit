
import ReactPlayer from 'react-player'

// Render a YouTube video player

function Player(props:any){

//  const url=props.url

  return(

<div className='m-0 row justify-content-center' >

<ReactPlayer url={props.url} width={250}  height={250} />

</div>

  )

}

export default Player;