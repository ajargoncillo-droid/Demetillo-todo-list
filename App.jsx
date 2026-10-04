import { useState } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import UserGuide from './UserGuide'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, done: false }])

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id))

  const clearAll = () => setTasks([])

  const visible = tasks.filter((t) =>
    filter === 'done' ? t.done : filter === 'notdone' ? !t.done : true
  )
  const doneCount = tasks.filter((t) => t.done).length

  const tabs = [
    ['all', 'All'],
    ['notdone', 'Not Done'],
    ['done', 'Done'],
  ]

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-xl space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">My To-Do List</h1>
          <p className="mt-1 text-sm text-slate-500">
            {doneCount} of {tasks.length} tasks done
          </p>
        </header>

        <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
          <TaskInput onAdd={addTask} />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-1">
              {tabs.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    filter === key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={clearAll}
              disabled={tasks.length === 0}
              className="text-sm font-medium text-red-600 hover:underline disabled:cursor-not-allowed disabled:text-slate-300 disabled:no-underline"
            >
              Clear all
            </button>
          </div>

          <TaskList tasks={visible} onToggle={toggleTask} onDelete={deleteTask} />
        </section>

        <UserGuide />
      </div>
    </div>
  )
}
