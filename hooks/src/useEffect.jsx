import { useState, useRef, useEffect } from "react"
import { crearConexion } from "."

export const VideoPlayer = () => {
  const [isPlay, setIsPlay] = useState(false) 
  const videoReferencia = useRef(null)
  const [text, setText] = useState('')


  useEffect(() => {
    if (isPlay) {
      videoReferencia.current.play()
    }else{
      videoReferencia.current.pause()
    }
  }, [isPlay])
  
  // Esto no funciona
  // if (isPlay) { 
  //   videoReferencia.current.play()
  // }else{
  //   videoReferencia.current.pause()
  // }


  return(
    <>
      <button onClick={() => setIsPlay(!isPlay)}> {!isPlay ? 'Reproducir' : 'Pausar' }</button>
      <input onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
      <video 
        ref={videoReferencia}
        loop
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
  </>
  )


}


export const SalaDeChat = () => {

  useEffect(() => {
    const connect = crearConexion()
    connect.conectar()

    return () => connect.desconectar()
  }, [])

  return(
    <h1> Bienvenido al chat</h1>
  )
}