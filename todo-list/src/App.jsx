import { useReducer } from 'react'
import ListaTareas from './ListaTareas'
import FormmularioTarea from './FormTarea'
import './style.css'
import { taskReducer } from './TaskReducer'
import { TaskContext, TaskDispatch } from './TaskContext'

// const tarea = {
//   id: crypto.randomUUID(),
//   titulo: 'Tarea 2',
//   completa: false
// }

const estadoInicial = [
  {
    id: 1,
    tarea: 'Tarea 1',
    completa: false
  }
]

function App () {
  const [tareas, dispatch] = useReducer(taskReducer, estadoInicial)

  return (
    <TaskContext.Provider value={tareas}>
      <TaskDispatch.Provider value={dispatch}>
        <>
          <FormmularioTarea />
          <section>
            {
        tareas.length > 0
          ? <ListaTareas />
          : <h2>No hay tareas</h2>
        }
          </section>
        </>
      </TaskDispatch.Provider>
    </TaskContext.Provider>
  )
}

export default App
