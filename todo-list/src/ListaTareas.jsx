import TareaItem from './TareaItem'

const ListaTareas = ({ tareas, borrarItem, marcarCompleta }) => {
  return (
    <ul>
      {
        tareas.map(tarea => <TareaItem key={tarea.id} tarea={tarea} borrarItem={borrarItem} marcarCompleta={marcarCompleta} />)
      }
    </ul>
  )
}

export default ListaTareas
