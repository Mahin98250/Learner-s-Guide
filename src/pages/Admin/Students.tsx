import { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
export default function Students() {
  const [search, setSearch] = useState('')

  const students = [
    {
      name: 'Mahin Patel',
      class: 'Class 9',
      status: 'Active',
    },
    {
      name: 'Vaidik Shah',
      class: 'Class 9',
      status: 'Active',
    },
    {
      name: 'Aarav Mehta',
      class: 'Class 10',
      status: 'Active',
    },
    {
      name: 'Riya Patel',
      class: 'Class 8',
      status: 'Active',
    },
  ]

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-blue-700">
              Students
            </h1>

            <p className="text-gray-500">
              Manage all student accounts
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
            + Add Student
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-5 mb-6">

          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {filtered.map((student, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{student.name}</td>

                  <td className="p-4">{student.class}</td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {student.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-2">

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}
