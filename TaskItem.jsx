export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex flex-col gap-2 rounded-lg border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 break-words">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
            task.done ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
          }`}
        >
          {task.done ? 'Done' : 'Not Done'}
        </span>
        <span className={task.done ? 'text-slate-400 line-through' : 'text-slate-800'}>
          {task.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="rounded-md bg-slate-800 px-3 py-1 text-sm text-white hover:bg-slate-700"
        >
          {task.done ? 'Mark Not Done' : 'Mark Done'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
