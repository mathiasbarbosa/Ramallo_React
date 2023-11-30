import { useContext, useState } from 'react'
import { TaskDispatch } from './TaskContext'

const FormularioTarea = () => {
  const [nuevaTarea, setNuevaTarea] = useState('')
  const dispatch = useContext(TaskDispatch)

  const handleChange = (e) => {
    setNuevaTarea(e.target.value)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    dispatch({
      type: 'agregar',
      tarea: nuevaTarea
      // tarea: { id: crypto.randomUUID(), titulo: nuevaTarea, completa: false }
    })
    setNuevaTarea('')
  }

  // const handleSubmit = (event, tarea) => {
  //   event.preventDefault()
  //   // if (tarea.trim() !== '') {
  //   //   const nuevaTarea = { id: crypto.randomUUID(), titulo: tarea, completa: false }
  //   //   return setTareas([...tareas, nuevaTarea])
  //   // }
  //   // TODO manejar el error
  //   window.alert('no hay tarea')
  // }

  return (
    <form onSubmit={(evento) => handleSubmit(evento)}>
      <input type='text' placeholder='Nueva tarea' value={nuevaTarea} onChange={(e) => handleChange(e)} />
      <button>Agregar nueva tarea</button>
    </form>
  )
}

export default FormularioTarea
