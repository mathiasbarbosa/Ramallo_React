import { useState } from "react";

export default function Button(props){

  // const [contador, setContador] = useState(0)
  // function handleClick(){
  //   console.log('hiciste click');
  //   // contador = contador + 1
  //   // console.log(contador);
  //   setContador(contador + 1)
  // }

  return(
    <button onClick={() => props.onClickSetContador()} >Incrementar contador {props.contador}</button>
  )

}