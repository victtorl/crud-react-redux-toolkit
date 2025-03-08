
import Card from './components/Card'
import ModalAdd from './components/Modal'

import { useSelector, } from 'react-redux'

function App() {

  const users=useSelector((state)=>state.users)

  return (
    <>

{/* navbar */}
<nav className="navbar navbar-light bg-primary container  ">
  <form className="form-inline m-3">
    <ModalAdd/>
  </form>
</nav>
{/* navbarend */}

<div className="container text-center mt-5">

  {users.map((item)=>(
   <h1>{item.github}</h1>
  ))}

  <div className='row'>
  <div className="col">
      <Card  
            urlmusica="https://www.youtube.com/watch?v=3j4I0PqNzKE&list=RD3j4I0PqNzKE&start_radio=1"
            urlimagen="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            estadoanimo="Alegria"
            descestado="Esta musica me recuerda ese momento donde fui feliz y nada parecia lo suficiente malo como para arruinarlo"
            
            />
  </div>

  <div className="col">
      <Card  
            urlmusica="https://youtu.be/_l09H-3zzgA?list=RDGMEM6ijAnFTG9nX1G-kbWBUCJA"
            urlimagen="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            estadoanimo="Alegria"
            descestado="Esta musica me recuerda ese momento donde fui feliz y nada parecia lo suficiente malo como para arruinarlo"
            
            />
  </div>


  <div className="col">
      <Card  
            urlmusica="https://www.youtube.com/watch?v=3j4I0PqNzKE&list=RD3j4I0PqNzKE&start_radio=1"
            urlimagen="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            estadoanimo="Alegria"
            descestado="Esta musica me recuerda ese momento donde fui feliz y nada parecia lo suficiente malo como para arruinarlo"
            
            />
  </div>
  
  </div>

</div>





    </>
  )
}

export default App
