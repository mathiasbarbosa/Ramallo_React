import { useState } from 'react'

const FormularioTarea = ({ addTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState('')

  const handleChange = (e) => {
    setNuevaTarea(e.target.value)
  }

  const handleSubmit = (evento) => {
    addTarea(evento, nuevaTarea)
    setNuevaTarea('')
  }

  return (
    <form onSubmit={(evento) => handleSubmit(evento)}>
      <input type='text' placeholder='Nueva tarea' value={nuevaTarea} onChange={(e) => handleChange(e)} />
      <button>Agregar nueva tarea</button>
    </form>
  )
}

export default FormularioTarea
