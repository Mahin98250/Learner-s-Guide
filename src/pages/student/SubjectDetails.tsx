import { Link, useParams } from 'react-router-dom'

const materials = [
  {
    id: 'notes',
    title: 'Notes',
    icon: '📚',
    description: 'Chapter-wise study notes',
  },
  {
    id: 'ppt',
    title: 'PPT Presentations',
    icon: '🖥️',
    description: 'Teacher presentation slides',
  },
  {
    id: 'worksheets',
    title: 'Worksheets & Assignments',
    icon: '📝',
    description: 'Practice worksheets and assignments',
  },
]

export default function SubjectDetails() {
  const { subjectId } = useParams()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700 capitalize">
            {subjectId}
          </h1>

          <p className="text-gray-600 mt-2">
            Select material type.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {materials.map((item) => (
            <Link
              key={item.id}
              to={`/student/material-viewer?type=${item.id}`}
            >
              <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">

                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h2 className="text-xl font-bold text-blue-700">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {item.description}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </div>
  )
}
