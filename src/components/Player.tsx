
import ReactPlayer from 'react-player'

// Render a YouTube video player

function Player(props:any){

 const urlvideo=props.urlvideo

  return(

<div className='m-0 row justify-content-center' >

<ReactPlayer url={urlvideo} width={250}  height={250} />

</div>

  )

}

export default Player;