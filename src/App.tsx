import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center'>
      <div className='text-center text-white'>
        <h1 className='text-5xl font-bold mb-4'>Learner's Guide</h1>
        <p className='text-xl mb-8'>Study Smarter, Learn Faster</p>
        <div className='flex gap-4 justify-center'>
          <Link to='/student/home' className='bg-white text-blue-700 px-4 py-2 rounded'>Student Portal</Link>
          <Link to='/admin/login' className='bg-blue-900 px-4 py-2 rounded'>Admin Portal</Link>
        </div>
      </div>
    </div>
  )
}

const StudentHome = () => <div className='p-6'><h1 className='text-3xl font-bold'>Student Home</h1></div>
const AdminLogin = () => <div className='p-6'><h1 className='text-3xl font-bold'>Admin Login</h1></div>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student/home' element={<StudentHome />} />
        <Route path='/admin/login' element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  )
}