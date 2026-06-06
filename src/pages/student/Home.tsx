import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const classes = ['7', '8', '9', '10', '11', '12']

const featuredSubjects = [
  { name: 'Science', icon: '🧪', accent: 'from-cyan-500 to-blue-600' },
  { name: 'Maths', icon: '📐', accent: 'from-violet-500 to-fuchsia-600' },
  { name: 'English', icon: '📖', accent: 'from-emerald-500 to-teal-600' },
  { name: 'SST', icon: '🌍', accent: 'from-amber-500 to-orange-600' },
  { name: 'Computer', icon: '💻', accent: 'from-sky-500 to-indigo-600' },
]

const recentMaterials = [
  {
    title: 'Science Notes Chapter 1',
    type: 'Notes',
    tag: 'New',
    color: 'bg-cyan-50 text-cyan-700',
  },
  {
    title: 'Maths Worksheet - Polynomials',
    type: 'Worksheet',
    tag: 'Popular',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    title: 'English Question Bank',
    type: 'Q&A',
    tag: 'Updated',
    color: 'bg-emerald-50 text-emerald-700',
  },
]

const quickActions = [
  {
    title: 'Browse Classes',
    description: 'Open all class pages in one place',
    to: '/student/classes',
    icon: '📚',
  },
  {
    title: 'Explore Subjects',
    description: 'Jump into subject-wise study',
    to: '/student/subjects',
    icon: '📖',
  },
  {
    title: 'Study Materials',
    description: 'Notes, PDFs, worksheets and more',
    to: '/student/materials',
    icon: '📝',
  },
  {
    title: 'My Profile',
    description: 'Check your account details',
    to: '/student/profile',
    icon: '👤',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 text-slate-900">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-8 left-8 h-36 w-36 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-6 right-10 h-52 w-52 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute top-20 right-1/3 h-20 w-20 rounded-full bg-blue-300 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                <span className="text-sm font-medium">Smart learning for students</span>
              </div>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Learner&apos;s Guide
              </h1>

              <p className="mt-4 max-w-xl text-base text-blue-100 md:text-lg">
                Study smarter with class-wise notes, question banks, worksheets, and
                easy navigation made for mobile and desktop.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <Link
                  to="/student/classes"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore Classes
                </Link>

                <Link
                  to="/student/materials"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Open Materials
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg">
                    <img
                      src={logo}
                      alt="Learner's Guide"
                      className="h-14 w-14 object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-blue-100">Welcome back</p>
                    <h2 className="text-2xl font-bold">Ready to learn?</h2>
                    <p className="text-sm text-blue-100">
                      Pick a class and continue your study path
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/15 p-4 text-center">
                    <div className="text-2xl font-black">6</div>
                    <div className="text-xs text-blue-100">Classes</div>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4 text-center">
                    <div className="text-2xl font-black">20+</div>
                    <div className="text-xs text-blue-100">Subjects</div>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4 text-center">
                    <div className="text-2xl font-black">100+</div>
                    <div className="text-xs text-blue-100">Materials</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white p-4 text-slate-900 shadow-lg">
                  <p className="text-sm font-semibold text-blue-700">Today’s focus</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Review notes, solve 10 questions, and open one worksheet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        {/* Quick actions */}
        <section className="mb-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Quick actions</h2>
              <p className="text-sm text-slate-500">
                Fast access to the most used parts of the app
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">📚</div>
              <h3 className="mt-3 text-lg font-semibold">Classes</h3>
              <p className="mt-1 text-sm text-slate-500">Classes 7 to 12 available</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">📖</div>
              <h3 className="mt-3 text-lg font-semibold">Subjects</h3>
              <p className="mt-1 text-sm text-slate-500">Subject-wise study flow</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">📝</div>
              <h3 className="mt-3 text-lg font-semibold">Notes</h3>
              <p className="mt-1 text-sm text-slate-500">Chapter notes and PDFs</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-3 text-lg font-semibold">Practice</h3>
              <p className="mt-1 text-sm text-slate-500">Questions, worksheets, PYQs</p>
            </div>
          </div>
        </section>

        {/* Classes */}
        <section className="mb-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Classes</h2>
              <p className="text-sm text-slate-500">
                Tap a class to open its study dashboard
              </p>
            </div>

            <Link
              to="/student/classes"
              className="hidden rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:inline-flex"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((cls, index) => (
              <Link
                key={cls}
                to={`/student/class/${cls}`}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-70 transition group-hover:scale-110" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white shadow-lg">
                      {cls}
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Class {cls}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">Class {cls}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Notes • Q&A • Worksheets • PDF resources
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                      Open class dashboard
                    </span>
                    <span className="text-lg transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
                    <div
                      className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{ width: `${55 + index * 6}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured subjects + Recent materials */}
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Featured subjects</h2>
              <p className="text-sm text-slate-500">
                Popular study areas in the platform
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredSubjects.map((subject) => (
                <Link
                  key={subject.name}
                  to="/student/subjects"
                  className="group overflow-hidden rounded-3xl border border-slate-200 p-4 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`rounded-2xl bg-gradient-to-r ${subject.accent} p-4 text-white shadow-md`}>
                    <div className="text-3xl">{subject.icon}</div>
                    <div className="mt-3 text-lg font-bold">{subject.name}</div>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">
                    Open subject-wise notes and materials
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Recent materials</h2>
              <p className="text-sm text-slate-500">
                A quick look at study content
              </p>
            </div>

            <div className="space-y-3">
              {recentMaterials.map((item) => (
                <Link
                  key={item.title}
                  to="/student/materials"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">
                        {item.title}
                      </h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.color}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{item.type}</p>
                  </div>
                  <span className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
              <p className="text-sm font-semibold text-blue-700">Study tip</p>
              <p className="mt-1 text-sm text-slate-600">
                Open one chapter, one worksheet, and one set of questions for the best revision flow.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
                  }
