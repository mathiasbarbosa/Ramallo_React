import React, { useState } from 'react';
import {sculptureList} from '../data.js'

const valorInicial = 0
const Galeria = () => {

  
  console.log(sculptureList);
  const [ index, setIndex ] = React.useState(valorInicial)
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  let hasNext =  index < sculptureList.length - 1
  let hasPrev =  index > 0 
  const handleNext = () => {
    if(hasNext){
      setIndex( index + 1 )
      console.log(index);
    }
  }

  const handlePrev = () => {
    if (hasPrev) {
      setIndex(index - 1)
    }
  }


  const handleMostrarDetalles = () => setMostrarDetalles(!mostrarDetalles)

  let artista = sculptureList[index]

  return (
    <div>
      <button onClick={handlePrev} disabled={!hasPrev}> Atras </button>
      <button onClick={handleNext} disabled={!hasNext}> Siguiente </button>
      <h2>{index + 1} de {sculptureList.length}  </h2>
      <h1>{artista.name} - {artista.artist}</h1>
      <img src={artista.url} alt={artista.alt}/> <br></br>
      <button onClick={handleMostrarDetalles}> {mostrarDetalles ? 'Ocultar' : 'Mostrar' } detalles</button>
      {
        mostrarDetalles ?
          <p>{artista.description}</p>
        : null
      }
    </div>
  );
}

export default Galeria;
