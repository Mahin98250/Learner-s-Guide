const subjects = [
  {
    name: 'Science',
    icon: '🔬',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Mathematics',
    icon: '📐',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'English',
    icon: '📖',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'SST',
    icon: '🌍',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Computer',
    icon: '💻',
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function Subjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Subjects
          </h1>

          <p className="text-gray-600 mt-2">
            Select a subject to view notes, worksheets and question banks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={`bg-gradient-to-r ${subject.color} text-white rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300 cursor-pointer`}
            >
              <div className="text-5xl mb-4">
                {subject.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {subject.name}
              </h2>

              <p className="mt-2 text-white/90">
                Notes • Worksheets • PYQs • Videos
              </p>

              <div className="mt-4 text-sm font-semibold">
                Open →
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
