import { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
export default function Dashboard() {
  const [notes, setNotes] = useState<File | null>(null)
  const [ppt, setPpt] = useState<File | null>(null)
  const [worksheet, setWorksheet] = useState<File | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-3xl p-8 shadow-2xl mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-blue-100">
            Manage Notes, PPTs, Assignments and Student Content
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">Total Notes</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">24</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">PPT Lessons</h3>
            <p className="text-4xl font-bold text-purple-600 mt-2">18</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">Assignments</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">36</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">Students</h3>
            <p className="text-4xl font-bold text-orange-600 mt-2">120</p>
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              📚 Upload Notes
            </h2>

            <input
              type="file"
              onChange={(e) =>
                setNotes(e.target.files?.[0] || null)
              }
              className="w-full border p-3 rounded-xl"
            />

            {notes && (
              <p className="mt-3 text-green-600">
                {notes.name}
              </p>
            )}

            <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
              Upload Notes
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              📽 Upload PPT
            </h2>

            <input
              type="file"
              onChange={(e) =>
                setPpt(e.target.files?.[0] || null)
              }
              className="w-full border p-3 rounded-xl"
            />

            {ppt && (
              <p className="mt-3 text-green-600">
                {ppt.name}
              </p>
            )}

            <button className="mt-4 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700">
              Upload PPT
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              📝 Upload Assignment
            </h2>

            <input
              type="file"
              onChange={(e) =>
                setWorksheet(e.target.files?.[0] || null)
              }
              className="w-full border p-3 rounded-xl"
            />

            {worksheet && (
              <p className="mt-3 text-green-600">
                {worksheet.name}
              </p>
            )}

            <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
              Upload Assignment
            </button>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Recent Uploads
          </h2>

          <div className="space-y-3">

            <div className="p-4 bg-gray-50 rounded-xl">
              📚 Science Chapter 1 Notes.pdf
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              📽 Chemical Reactions PPT.pptx
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              📝 Physics Assignment 3.pdf
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
