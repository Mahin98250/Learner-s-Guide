import logo from '../../assets/logo.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Hero */}
      <div className="relative overflow-hidden bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Learner's Guide"
              className="w-24 h-24 mb-4 object-contain"
            />

            <h1 className="text-4xl md:text-5xl font-bold">
              Learner's Guide
            </h1>

            <p className="mt-3 text-blue-100">
              Study Smarter • Learn Faster
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Welcome */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700">
            Welcome Back 👋
          </h2>

          <p className="text-gray-600 mt-2">
            Access notes, question banks, worksheets and previous year papers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow">
            <div className="text-3xl">📚</div>
            <h3 className="font-semibold mt-2">Classes</h3>
            <p className="text-gray-500">6 Available</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <div className="text-3xl">📖</div>
            <h3 className="font-semibold mt-2">Subjects</h3>
            <p className="text-gray-500">All Major Subjects</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <div className="text-3xl">📝</div>
            <h3 className="font-semibold mt-2">Notes</h3>
            <p className="text-gray-500">Updated Regularly</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <div className="text-3xl">🎯</div>
            <h3 className="font-semibold mt-2">Q&A</h3>
            <p className="text-gray-500">Practice Daily</p>
          </div>
        </div>

        {/* Classes */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Classes
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['7', '8', '9', '10', '11', '12'].map((cls) => (
              <div
                key={cls}
                className="p-5 rounded-2xl border border-blue-100 hover:shadow-lg transition"
              >
                <h3 className="font-bold">Class {cls}</h3>
                <p className="text-gray-500 text-sm">
                  Notes • Q&A • Worksheets
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Materials */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Recent Materials
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-blue-50">
              Science Notes Chapter 1
            </div>

            <div className="p-4 rounded-xl bg-blue-50">
              Maths Worksheet - Polynomials
            </div>

            <div className="p-4 rounded-xl bg-blue-50">
              English Question Bank
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
