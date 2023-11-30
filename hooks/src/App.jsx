
import './App.css'
import { SalaDeChat, VideoPlayer } from './useEffect'
import { Cronometro, Form, UseRef } from './useRef'

function App() {

  return (
    <>
      {/* USE REF */}
      <UseRef />
      <Cronometro />
      <Form />

      {/* USE EFFECT */}
      <br />
      <VideoPlayer />
      <SalaDeChat />
    </>
  )
}

export default App
