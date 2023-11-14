
import './App.css'
import Encabezado from './Encabezado.jsx'
import Contenido from './Contenido.jsx'
import PieDePagina from './PieDePagina.jsx'
import {useState} from 'react'
import Button from './Button.jsx'
import Profile from './Profile.jsx'


function App() {

  const [contador, setContador] = useState(0)
  // let contador = 0;

  function handleClick(){
    console.log('hiciste click');
    // contador = contador + 1
    // console.log(contador);
    setContador(contador + 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit...');
    console.log(event.target.children[0].value);
    setEdad(parseInt((event.target.children[0].value)) )
  }


  return (
    <>
      <Encabezado titulo='Este es el titulo de mi web de ejemplos' />
      <Encabezado titulo='El titulo lo recibe por props'/>
      <Contenido />
      <PieDePagina autor='Ramallo team' /> 
      <button onClick={handleClick}>Incrementar contador</button>
      <h3>Contador {contador}</h3>
      <Button contador={contador} onClickSetContador={handleClick}/>
      <Button contador={contador} onClickSetContador={handleClick} />


    
    </>
  )
}

export default App
