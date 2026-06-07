import { Link } from 'react-router-dom'

export default function Dashboard() {
  const stats = [
    {
      title: 'Classes',
      value: '6',
      color: 'text-blue-600',
      icon: '🏫',
      link: '/admin/classes',
    },
    {
      title: 'Subjects',
      value: '24',
      color: 'text-purple-600',
      icon: '📚',
      link: '/admin/subjects',
    },
    {
      title: 'Materials',
      value: '78',
      color: 'text-green-600',
      icon: '📄',
      link: '/admin/materials',
    },
    {
      title: 'Students',
      value: '120',
      color: 'text-orange-600',
      icon: '👨‍🎓',
      link: '/admin/students',
    },
  ]

  const classes = [7, 8, 9, 10, 11, 12]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-3xl p-8 shadow-2xl mb-8">
          <h1 className="text-4xl font-bold">
            Learner's Guide Admin
          </h1>

          <p className="mt-2 text-blue-100">
            Manage classes, subjects, notes, PPTs, worksheets and students
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">
          {stats.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="text-gray-500 mt-3">
                {item.title}
              </h3>

              <p className={`text-4xl font-bold mt-2 ${item.color}`}>
                {item.value}
              </p>
            </Link>
          ))}
        </div>

        {/* Class Management */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">
              Class Management
            </h2>

            <Link
              to="/admin/classes"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">

            {classes.map((cls) => (
              <Link
                key={cls}
                to={`/admin/class/${cls}`}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-5 text-center hover:scale-105 transition"
              >
                <div className="text-3xl mb-2">
                  📚
                </div>

                <h3 className="font-bold">
                  Class {cls}
                </h3>
              </Link>
            ))}

          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            to="/admin/classes"
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-3">
              🏫
            </div>

            <h3 className="font-bold text-xl">
              Classes
            </h3>

            <p className="text-gray-500 mt-2">
              Manage all classes and subjects
            </p>
          </Link>

          <Link
            to="/admin/students"
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-3">
              👨‍🎓
            </div>

            <h3 className="font-bold text-xl">
              Students
            </h3>

            <p className="text-gray-500 mt-2">
              Manage student records
            </p>
          </Link>

          <Link
            to="/admin/subjects"
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-3">
              📖
            </div>

            <h3 className="font-bold text-xl">
              Subjects
            </h3>

            <p className="text-gray-500 mt-2">
              Manage all subjects
            </p>
          </Link>

          <Link
            to="/admin/settings"
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-3">
              ⚙️
            </div>

            <h3 className="font-bold text-xl">
              Settings
            </h3>

            <p className="text-gray-500 mt-2">
              Configure platform settings
            </p>
          </Link>

        </div>

      </div>
    </div>
  )
}
