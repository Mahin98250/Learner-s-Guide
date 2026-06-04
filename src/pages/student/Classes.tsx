import { Link } from 'react-router-dom'

const classes = [
  { id: 7, color: 'from-blue-500 to-cyan-500' },
  { id: 8, color: 'from-purple-500 to-pink-500' },
  { id: 9, color: 'from-green-500 to-emerald-500' },
  { id: 10, color: 'from-orange-500 to-red-500' },
  { id: 11, color: 'from-indigo-500 to-blue-500' },
  { id: 12, color: 'from-teal-500 to-cyan-500' },
]

export default function Classes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Classes
          </h1>

          <p className="text-gray-600 mt-2">
            Select your class to access subjects, notes and study materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {classes.map((cls) => (
            <Link
              key={cls.id}
              to={`/student/class/${cls.id}`}
              className="group"
            >
              <div
                className={`bg-gradient-to-r ${cls.color} text-white rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300`}
              >
                <div className="text-5xl mb-4">📚</div>

                <h2 className="text-2xl font-bold">
                  Class {cls.id}
                </h2>

                <p className="mt-2 text-white/90">
                  Notes • Worksheets • PYQs • Q&A
                </p>

                <div className="mt-4 text-sm font-semibold">
                  Open →
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </div>
  )
}
