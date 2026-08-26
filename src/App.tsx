import React, { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import logo from './assets/logo.jpeg'

const ClassDetails = lazy(() => import('./pages/student/ClassDetails'))
const SubjectDetails = lazy(() => import('./pages/student/SubjectDetails'))
const MaterialViewer = lazy(() => import('./pages/student/MaterialViewer'))
const StudentHome = lazy(() => import('./pages/student/Home'))
const Classes = lazy(() => import('./pages/student/Classes'))
const Subjects = lazy(() => import('./pages/student/Subjects'))
const Materials = lazy(() => import('./pages/student/Materials'))
const Profile = lazy(() => import('./pages/student/Profile'))
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'))
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'))
const Students = lazy(() => import('./pages/Admin/Students'))
const ClassesAdmin = lazy(() => import('./pages/Admin/Classes'))
const SubjectsAdmin = lazy(() => import('./pages/Admin/Subjects'))
const Settings = lazy(() => import('./pages/Admin/Settings'))

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
        <p className="mt-3 text-sm font-medium text-slate-500">Loading…</p>
      </div>
    </div>
  )
}

function Landing() {
  const classes = ['7', '8', '9', '10', '11', '12']

  const features = [
    { icon: '📚', title: 'Class-wise Notes', desc: 'Clean, organized notes for every class and subject.' },
    { icon: '📝', title: 'Question Bank', desc: 'Practice important questions, exercises, and PYQs.' },
    { icon: '📄', title: 'PDF Resources', desc: 'Access study PDFs, worksheets, and downloadable material.' },
    { icon: '🎯', title: 'Fast Learning', desc: 'Study in a simple, mobile-friendly, and modern way.' },
  ]

  const stats = [
    { value: '6', label: 'Classes' },
    { value: '20+', label: 'Subjects' },
    { value: '100+', label: 'Notes' },
    { value: '500+', label: 'Questions' },
  ]

  const whyChoose = [
    'Notes for every chapter',
    'Question banks & PYQs',
    'Easy subject navigation',
    'Mobile-friendly learning',
    'Teacher managed content',
    'Fast and organized study experience',
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                <span>🚀</span><span className="text-sm font-medium">Smart Learning Platform</span>
              </div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white p-2 shadow-2xl lg:mx-0">
                <img src={logo} alt="Learner's Guide" className="h-full w-full object-contain" />
              </div>
              <h1 className="text-5xl font-black leading-tight md:text-7xl">Learner&apos;s Guide</h1>
              <p className="mx-auto mt-5 max-w-xl text-lg text-blue-100 lg:mx-0 md:text-xl">Notes, PDFs, Question Banks, Worksheets and smart learning resources for Classes 7 to 12.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/student/home" className="rounded-2xl bg-white px-8 py-4 text-center font-bold text-blue-700 shadow-xl transition hover:scale-105">Student Portal</Link>
                <Link to="/admin/login" className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-center font-bold backdrop-blur transition hover:scale-105 hover:bg-white/15">Admin Portal</Link>
              </div>
              <div className="mt-8">
                <input placeholder="Search classes, subjects, notes..." className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-blue-100 outline-none backdrop-blur" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="rounded-3xl bg-white/10 p-5">
                  <h2 className="text-2xl font-bold">Study smarter</h2>
                  <p className="mt-2 text-blue-100">Everything a student needs in one place.</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {['6|Classes', '20+|Subjects', '100+|Resources'].map((item) => {
                      const [value, label] = item.split('|')
                      return <div key={label} className="rounded-2xl bg-white/10 p-4 text-center"><div className="text-2xl font-black">{value}</div><div className="text-xs text-blue-100">{label}</div></div>
                    })}
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white px-4 py-4 text-slate-900 shadow-lg"><p className="text-sm font-semibold text-blue-700">Quick access</p><p className="mt-1 text-sm text-slate-600">Open classes, notes, and materials fast.</p></div>
                  <div className="rounded-2xl bg-white px-4 py-4 text-slate-900 shadow-lg"><p className="text-sm font-semibold text-blue-700">Mobile ready</p><p className="mt-1 text-sm text-slate-600">Clean layout on phones and desktops.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center"><h2 className="text-4xl font-bold">Features</h2><p className="mt-3 text-slate-500">Everything designed for a smooth learning experience</p></div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => <div key={item.title} className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"><div className="text-5xl">{item.icon}</div><h3 className="mt-4 text-xl font-bold group-hover:text-blue-700">{item.title}</h3><p className="mt-2 text-slate-600">{item.desc}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 text-center"><h2 className="text-4xl font-bold">Browse Classes</h2><p className="mt-3 text-slate-500">Tap a class to open its study dashboard</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, index) => <Link key={cls} to={`/student/class/${cls}`} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"><div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-80 transition group-hover:scale-110" /><div className="relative"><div className="mb-5 flex items-center justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white shadow-lg">{cls}</div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Class {cls}</span></div><h3 className="text-2xl font-bold">Class {cls}</h3><p className="mt-2 text-slate-500">Notes • Q&A • Worksheets • PDF resources</p><div className="mt-6 flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Open class dashboard</span><span className="text-2xl transition group-hover:translate-x-1">→</span></div><div className="mt-5 h-1.5 w-full rounded-full bg-slate-100"><div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${55 + index * 6}%` }} /></div></div></Link>)}
        </div>
      </section>

      <section className="bg-white py-16"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 text-center"><h2 className="text-4xl font-bold text-blue-700">Platform Overview</h2><p className="mt-3 text-slate-500">A quick look at what the platform offers</p></div><div className="grid grid-cols-2 gap-6 md:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm"><h3 className="text-5xl font-black text-blue-700">{stat.value}</h3><p className="mt-2 text-slate-500">{stat.label}</p></div>)}</div></div></section>
      <section className="mx-auto max-w-7xl px-6 py-14"><div className="rounded-[2rem] bg-white p-8 shadow-xl"><h2 className="mb-6 text-3xl font-bold text-blue-700">Why Learner&apos;s Guide?</h2><div className="grid gap-4 md:grid-cols-2">{whyChoose.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-700">✅ {item}</div>)}</div></div></section>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-20 text-center text-white"><div className="mx-auto max-w-3xl px-6"><h2 className="text-4xl font-black md:text-5xl">Ready to Start Learning?</h2><p className="mt-4 text-blue-100">Access all your study materials in one place with a clean and modern experience.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link to="/student/home" className="rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:scale-105">Enter Student Portal</Link><Link to="/admin/login" className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold backdrop-blur transition hover:scale-105 hover:bg-white/15">Admin Login</Link></div></div></section>
      <footer className="bg-slate-900 py-10 text-center text-slate-400">© 2026 Learner&apos;s Guide • Built by Mahin</footer>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/classes" element={<ClassesAdmin />} />
          <Route path="/admin/subjects" element={<SubjectsAdmin />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/" element={<Landing />} />
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/classes" element={<Classes />} />
          <Route path="/student/subjects" element={<Subjects />} />
          <Route path="/student/materials" element={<Materials />} />
          <Route path="/student/class/:classId" element={<ClassDetails />} />
          <Route path="/student/subject/:subjectId" element={<SubjectDetails />} />
          <Route path="/student/material-viewer" element={<MaterialViewer />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
