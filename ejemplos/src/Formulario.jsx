import React, { Fragment, useState } from 'react';



const Formulario = () => {

  const [persona, setPersona] = useState({
    nombre: 'Santi',
    apellido: 'Burgues',
    email: 'santi@correo.com'
  })


  // const handleNombre = (e) => {
  //   // persona.nombre = e.target.value
  //   setPersona( {...persona, nombre: e.target.value})
  // }
  // const handleApellido = (e) => {
  //   // persona.nombre = e.target.value
  //   setPersona( {...persona, apellido: e.target.value})
  // }
  // const handleEmail = (e) => {
  //   // persona.nombre = e.target.value
  //   setPersona( {...persona, email: e.target.value})
  // }

  const handleChange = (e) => {
    // persona.nombre = e.target.value
    setPersona( {...persona, [e.target.name]: e.target.value})
  }


  return (
    <Fragment>
      <form>
        <input 
          type='text' 
          value={persona.nombre} 
          placeholder='Nombre'  
          name='nombre'
          onChange={(e) => handleChange(e)}
        /> 

      <input 
          type='text' 
          value={persona.apellido} 
          placeholder='Apellido'  
          name='apellido'
          onChange={(e) => handleChange(e)}
        /> 

      <input 
          type='text' 
          value={persona.email} 
          placeholder='Nombre'  
          name='email'
          onChange={(e) => handleChange(e)}
        /> 

      </form>

      <h2>{persona.nombre} - {persona.apellido} - {persona.email} </h2>
    </Fragment>

  );
}

export default Formulario;
