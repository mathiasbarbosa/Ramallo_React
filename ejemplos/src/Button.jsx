import React from 'react';

const Button = ({ children, onClick}) => {

  function handleClick(){
    alert('Hiciste click')
  }

  return (
    // <button onClick={handleClick} >No hace nada </button>
    <button onClick={onClick} > {children} </button>
  );
}

export default Button;
