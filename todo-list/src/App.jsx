import { useState } from 'react'
import ListaTareas from './ListaTareas'
import FormmularioTarea from './FormTarea'
import './style.css'

// const tarea = {
//   id: crypto.randomUUID(),
//   titulo: 'Tarea 2',
//   completa: false
// }

function App () {
  const [tareas, setTareas] = useState([])
  console.log(tareas)

  const handleSubmit = (event, tarea) => {
    event.preventDefault()
    if (tarea.trim() !== '') {
      const nuevaTarea = { id: crypto.randomUUID(), titulo: tarea, completa: false }
      return setTareas([...tareas, nuevaTarea])
    }
    // TODO manejar el error
    window.alert('no hay tarea')
  }

  const borrarItem = (id) => {
    const nuevasTareas = tareas.filter(t => t.id !== id)
    setTareas(nuevasTareas)
  }

  const marcarCompleta = (id) => {
    const nuevasTareas = tareas.map(t => {
      if (t.id === id) return { ...t, completa: !t.completa }
      return t
    })

    setTareas(nuevasTareas)
  }

  return (
    <>
      <FormmularioTarea addTarea={handleSubmit} />
      <section>
        {
        tareas.length > 0
          ? <ListaTareas tareas={tareas} borrarItem={borrarItem} marcarCompleta={marcarCompleta} />
          : <h2>No hay tareas</h2>
        }
      </section>

    </>
  )
}

export default App
