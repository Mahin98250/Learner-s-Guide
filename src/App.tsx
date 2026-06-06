import React from 'react'
import ClassDetails from './pages/student/ClassDetails'
import SubjectDetails from './pages/student/SubjectDetails'
import MaterialViewer from './pages/student/MaterialViewer'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import StudentHome from './pages/student/Home'
import Classes from './pages/student/Classes'
import Subjects from './pages/student/Subjects'
import Materials from './pages/student/Materials'
import Profile from './pages/student/Profile'
import AdminLogin from './pages/Admin/AdminLogin'
import Dashboard from './pages/Admin/Dashboard'
import Students from './pages/Admin/Students'
import ClassesAdmin from './pages/Admin/Classes'
import SubjectsAdmin from './pages/Admin/Subjects'
import Settings from './pages/Admin/Settings'

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">

        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">

          <div className="w-28 h-28 mx-auto mb-6 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
            <span className="text-5xl">🎓</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Learner's Guide
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Study Smarter • Learn Faster
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/student/home"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Student Portal
            </Link>

            <Link
              to="/admin/login"
              className="bg-blue-900 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Admin Portal
            </Link>

          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto p-6 -mt-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-1 transition">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">
              Notes & Materials
            </h3>
            <p className="text-gray-600">
              Access chapter-wise notes, worksheets and study PDFs.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-1 transition">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">
              Question Banks
            </h3>
            <p className="text-gray-600">
              Practice important questions and previous year papers.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-1 transition">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">
              Faster Learning
            </h3>
            <p className="text-gray-600">
              Organized learning for Classes 7 to 12.
            </p>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Platform Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">6</h3>
            <p className="text-gray-500">Classes</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">20+</h3>
            <p className="text-gray-500">Subjects</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">100+</h3>
            <p className="text-gray-500">Notes</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">500+</h3>
            <p className="text-gray-500">Questions</p>
          </div>

        </div>
      </div>

      {/* Why Choose */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Why Learner's Guide?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              ✅ Notes for every chapter
            </div>

            <div>
              ✅ Question banks & PYQs
            </div>

            <div>
              ✅ Easy subject navigation
            </div>

            <div>
              ✅ Mobile-friendly learning
            </div>

            <div>
              ✅ Teacher managed content
            </div>

            <div>
              ✅ Fast and organized study experience
            </div>

          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-10 text-gray-500">
        © 2026 Learner's Guide • Built for Students
      </div>

    </div>
  )
}



export default function App() {
  return (
    <HashRouter>
      <Routes>
        
          <Route path="/admin/students" element={<Students />} />
<Route path="/admin/classes" element={<ClassesAdmin />} />
<Route path="/admin/subjects" element={<SubjectsAdmin />} />
<Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path='/student/profile' element={<Profile />} />
        <Route path="/" element={<Landing />} />
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/classes" element={<Classes />} />
        <Route path="/student/subjects" element={<Subjects />} />
        <Route path="/student/materials" element={<Materials />} />
        <Route path="/student/class/:classId" element={<ClassDetails />} />
<Route path="/student/subject/:subjectId" element={<SubjectDetails />} />
<Route path="/student/material-viewer" element={<MaterialViewer />} />
       
      </Routes>
    </HashRouter>
  )
}
