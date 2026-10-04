import TaskItem from './TaskItem'

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="mt-6 text-center text-slate-400">No tasks here yet.</p>
  }
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
