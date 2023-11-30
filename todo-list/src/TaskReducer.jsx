export const taskReducer = (tareas, action) => {
  switch (action.type) {
    case 'agregar':
      return [
        ...tareas,
        { id: crypto.randomUUID(), tarea: action.tarea, completa: false }
      ]
    case 'completada':
      return tareas.map(t => {
        if (t.id === action.id) return { ...t, completa: !t.completa }
        return t
      })
    case 'borrar':
      return tareas.filter(t => t.id !== action.id)
    default:
      break
  }
}
