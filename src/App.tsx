
import Card from './components/Card'
import ModalAdd from './components/Modal'
import { useSelector } from 'react-redux';
import { RootState } from './store/store';



function App() {

  const items = useSelector((state: RootState) => state.itemscard);


  return (
    <>

{/* navbar */}
<nav className="navbar navbar-light bg-primary container  ">
  <form className="form-inline m-3">
    <ModalAdd/>
  </form>
</nav>
{/* navbarend */}

<div className="container text-center mt-5 ">



  <div className='row '>
  {items.map((item:any)=>(
            <div className="col">
            <Card  
                  urlmusica={item.url}
                  estadoanimo={item.title}
                  descestado={item.description}    
                  id={item.id}              
                  />
        </div>
    ))}
  </div>

</div>





    </>
  )
}

export default App
