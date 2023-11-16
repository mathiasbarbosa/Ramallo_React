
import './App.css'
import Encabezado from './Encabezado.jsx'
import Contenido from './Contenido.jsx'
import PieDePagina from './PieDePagina.jsx'
import {useState} from 'react'
import Button2 from './Button2.jsx'
import Profile from './Profile.jsx'
import Button from './Button.jsx'


function Clock({ time }) {
  let hours = time.getHours();
  let className
  if (hours >= 0 && hours <= 6) {
    className = 'night'
  } else {
    className = 'day'
  }
  return (
    <h1 id="time" className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}



function App() {

  const [contador, setContador] = useState(0)
  // let contador = 0;

  function handleClick(){
    console.log('hiciste click');
    // contador = contador + 1
    // console.log(contador);
    setContador((valorPrevio) => valorPrevio + 1  )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit...');
    console.log(event.target.children[0].value);
    setEdad(parseInt((event.target.children[0].value)) )
  }

 

  return (
    <>
      {/* <Encabezado titulo='Este es el titulo de mi web de ejemplos' />
      <Encabezado titulo='El titulo lo recibe por props'/>
      <Contenido />
      <PieDePagina autor='Ramallo team' /> 
      <button onClick={handleClick}>Incrementar contador</button>
      <h3>Contador {contador}</h3>
      <Button2 contador={contador} onClickSetContador={handleClick}/>
      <Button2 contador={contador} onClickSetContador={handleClick} /> */}

      {/* Ejemplos clase 15/11 */}
      {/* <Clock time={new Date()} /> */}
      {/* <Button onClick={ () => alert('Reproduciendo peli')} > Reproducir pelicula </Button>
      <Button onClick={() => console.log('Pausando peli')} > Pausar pelicula</Button> */}
      <button onClick={() => {
        // setContador( 1 + 1)
        // setContador( 1 + 1)
        // setContador( 1 + 1)
        handleClick()
        handleClick()
        handleClick()
      
      } }> Incrementar +3   </button>
      <h2>{contador}</h2>
    </>
  )
}

export default App
