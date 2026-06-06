import { Link, useParams } from 'react-router-dom'

const subjects = [
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
  },
  {
    id: 'english',
    name: 'English',
    icon: '📖',
  },
  {
    id: 'sst',
    name: 'SST',
    icon: '🌍',
  },
]

export default function ClassDetails() {
  const { classId } = useParams()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Class {classId}
          </h1>

          <p className="text-gray-600 mt-2">
            Select a subject to continue learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              to={`/student/subject/${subject.id}`}
            >
              <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">

                <div className="text-5xl mb-4">
                  {subject.icon}
                </div>

                <h2 className="text-2xl font-bold text-blue-700">
                  {subject.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Open Subject →
                </p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
