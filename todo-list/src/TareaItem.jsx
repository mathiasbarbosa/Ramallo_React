import React from 'react'

const TareaItem = ({ tarea, borrarItem, marcarCompleta }) => {
  const { titulo, completa, id } = tarea
  const [isCompleted, setIsCompleted] = React.useState(completa)

  const handleClick = () => {
    marcarCompleta(id)
    setIsCompleted(!isCompleted)
  }

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
      <strong>{titulo} - {completa}</strong>
      <button onClick={() => borrarItem(id)}>Eliminar</button>
      <button onClick={handleClick}>Marcar como completada</button>
    </li>
  )
}

export default TareaItem
