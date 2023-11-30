import { useContext } from 'react'
import TareaItem from './TareaItem'
import { TaskContext } from './TaskContext'

const ListaTareas = () => {
  const tareas = useContext(TaskContext)
  return (
    <ul>
      {
        tareas.map(tarea => <TareaItem key={tarea.id} task={tarea} />)
      }
    </ul>
  )
}

export default ListaTareas
