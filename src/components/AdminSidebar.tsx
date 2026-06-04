import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        Learner's Guide
      </h1>

      <div className="flex flex-col gap-3">

        <Link to="/admin/dashboard">📊 Dashboard</Link>

        <Link to="/admin/students">👨‍🎓 Students</Link>

        <Link to="/admin/classes">🏫 Classes</Link>

        <Link to="/admin/subjects">📖 Subjects</Link>

        <Link to="/admin/settings">⚙️ Settings</Link>

      </div>
    </div>
  )
}
