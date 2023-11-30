import { useRef, useState } from "react"

export const UseRef = () => {

  const referencia = useRef(0)
  const referenciaParrafo = useRef()

  const handleClick = () => {
    referencia.current = referencia.current + 1
    alert("Hiciste click " + referencia.current + " veces")
    referenciaParrafo.current.style.color = 'red'
    referenciaParrafo.current.textContent = 'Soy un parrafo'
  }


  return(
    <div>
      <button onClick={handleClick}>Click aca {referencia.current}</button>
      <p ref={referenciaParrafo}>lorem lorem</p>
    </div>
  )

}

export const Cronometro = () => {

  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)

  const intervaloRef = useRef(null)


  const handleStart = () => {
    setStartTime(new Date())
    setNow(new Date())

    intervaloRef.current = setInterval(() => {
      setNow(new Date())
    }, 10)

    console.log(intervaloRef.current);
  }

  const handleStop = () => {
    clearInterval(intervaloRef.current)
  }

  let segundosPasados = 0
  if(startTime !== null && now !== null) {
    segundosPasados =  (now - startTime) / 1000
  }

  return(
    <div>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handleStop}>Detener</button>
      <h1>Tiempo transcurrido: {segundosPasados.toFixed(2)} </h1>
    </div>
  )
}

export const Form = () => {

  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
    inputRef.current.value = 'Hola Seba'
    console.log(inputRef);
    console.log(inputRef.current);
  }


  return(
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Foco en el input</button>
    </>
  ) 

}