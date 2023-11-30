import React, { useContext, useState } from 'react'
import { TaskDispatch } from './TaskContext'

const TareaItem = ({ task }) => {
  const { tarea, completa, id } = task
  const [isCompleted, setIsCompleted] = useState(false)
  const dispatch = useContext(TaskDispatch)

  const borrarItem = (id) => {
    dispatch({
      type: 'borrar',
      id
    })
  }

  const marcarCompleta = (id) => {
    dispatch({
      type: 'completada',
      id
    })
    // setIsCompleted(true)
    setIsCompleted(prev => !prev)
  }

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
      <strong>{tarea} - {completa}</strong>
      <button onClick={() => borrarItem(id)}>Eliminar</button>
      <button onClick={marcarCompleta}>Marcar como completada</button>
    </li>
  )
}

export default TareaItem
