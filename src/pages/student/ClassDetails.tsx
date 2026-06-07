import { Link, useParams } from 'react-router-dom'

const subjects = [
{
id: 'english',
name: 'English',
icon: '📖',
description: 'Grammar, Literature and Writing',
color: 'from-blue-500 to-cyan-500',
},
{
id: 'mathematics',
name: 'Mathematics',
icon: '📐',
description: 'Algebra, Geometry and Problem Solving',
color: 'from-purple-500 to-indigo-500',
},
{
id: 'science',
name: 'Science',
icon: '🔬',
description: 'Physics, Chemistry and Biology',
color: 'from-emerald-500 to-green-500',
},
{
id: 'sst',
name: 'Social Science',
icon: '🌍',
description: 'History, Geography and Civics',
color: 'from-orange-500 to-red-500',
},
]

export default function ClassDetails() {
const { classId } = useParams()

return ( <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 p-6">

  <div className="max-w-7xl mx-auto">

    {/* Header */}

    <div className="mb-10 text-center">

      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
        📚 Learner's Guide
      </div>

      <h1 className="mt-5 text-5xl font-black text-blue-700">
        Class {classId}
      </h1>

      <p className="mt-3 text-gray-600 text-lg">
        Select a subject to continue learning
      </p>

    </div>

    {/* Subjects */}

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {subjects.map((subject) => (

        <Link
          key={subject.id}
          to={`/student/subject/${subject.id}`}
          className="group"
        >

          <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div
              className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br ${subject.color} opacity-20`}
            />

            <div className="relative">

              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${subject.color} text-3xl text-white shadow-lg`}
              >
                {subject.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-800">
                {subject.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {subject.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm font-semibold text-blue-700">
                  Open Subject
                </span>

                <span className="text-xl transition group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

    {/* Study Flow */}

    <div className="mt-14 rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-800">
        How Learning Works
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-4">

        <div className="rounded-2xl bg-blue-50 p-4 text-center">
          <div className="text-3xl">1️⃣</div>
          <p className="mt-2 font-semibold">
            Select Subject
          </p>
        </div>

        <div className="rounded-2xl bg-purple-50 p-4 text-center">
          <div className="text-3xl">2️⃣</div>
          <p className="mt-2 font-semibold">
            Open Resources
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-4 text-center">
          <div className="text-3xl">3️⃣</div>
          <p className="mt-2 font-semibold">
            Study Materials
          </p>
        </div>

        <div className="rounded-2xl bg-orange-50 p-4 text-center">
          <div className="text-3xl">4️⃣</div>
          <p className="mt-2 font-semibold">
            Learn Better
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

)
}
