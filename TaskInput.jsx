import { useState } from 'react'

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    const value = text.trim()
    if (!value) return
    onAdd(value)
    setText('')
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Add a new task..."
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />
      <button
        onClick={handleAdd}
        className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700"
      >
        Add Task
      </button>
    </div>
  )
}
