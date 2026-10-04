export default function UserGuide() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
      <h2 className="mb-3 text-xl font-semibold text-slate-800">User Guide</h2>
      <ol className="list-decimal space-y-2 pl-5 text-slate-600">
        <li>
          <strong>Add a task:</strong> type it in the box, then click "Add Task" or press Enter.
        </li>
        <li>
          <strong>Mark Done / Not Done:</strong> click "Mark Done" on a task. Click "Mark Not Done" to change it back.
        </li>
        <li>
          <strong>Delete a task:</strong> click "Delete" on the task, or "Clear all" to remove every task.
        </li>
      </ol>
    </section>
  )
}
