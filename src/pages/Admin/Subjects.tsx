import AdminSidebar from '../../components/AdminSidebar'
export default function Subjects() {
  const subjects = [
    {
      name: 'Science',
      icon: '🔬',
    },
    {
      name: 'Mathematics',
      icon: '📐',
    },
    {
      name: 'English',
      icon: '📖',
    },
    {
      name: 'SST',
      icon: '🌍',
    },
    {
      name: 'Computer',
      icon: '💻',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-blue-700">
              Subject Management
            </h1>

            <p className="text-gray-500 mt-2">
              Manage subjects, notes, presentations and practice material
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-lg">
            + Add Subject
          </button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {subject.icon}
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                {subject.name}
              </h2>

              <div className="grid grid-cols-3 gap-2 mt-6">

                <div className="bg-blue-100 rounded-xl p-3 text-center">
                  <div className="text-2xl">📚</div>
                  <p className="text-sm font-medium mt-1">
                    Notes
                  </p>
                </div>

                <div className="bg-purple-100 rounded-xl p-3 text-center">
                  <div className="text-2xl">🖥️</div>
                  <p className="text-sm font-medium mt-1">
                    PPTs
                  </p>
                </div>

                <div className="bg-green-100 rounded-xl p-3 text-center">
                  <div className="text-2xl">📝</div>
                  <p className="text-sm font-medium mt-1">
                    Practice
                  </p>
                </div>

              </div>

              <div className="flex gap-2 mt-6">

                <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
                  Manage
                </button>

                <button className="flex-1 bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600">
                  Edit
                </button>

                <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600">
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Subject Statistics
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <div className="bg-blue-100 rounded-2xl p-5">
              <p className="text-gray-600">Notes</p>
              <h3 className="text-4xl font-bold text-blue-700">
                120
              </h3>
            </div>

            <div className="bg-purple-100 rounded-2xl p-5">
              <p className="text-gray-600">PPTs</p>
              <h3 className="text-4xl font-bold text-purple-700">
                75
              </h3>
            </div>

            <div className="bg-green-100 rounded-2xl p-5">
              <p className="text-gray-600">Worksheets</p>
              <h3 className="text-4xl font-bold text-green-700">
                95
              </h3>
            </div>

            <div className="bg-orange-100 rounded-2xl p-5">
              <p className="text-gray-600">Assignments</p>
              <h3 className="text-4xl font-bold text-orange-700">
                60
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
