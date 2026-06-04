import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Settings() {
  const navigate = useNavigate()

  const [instituteName, setInstituteName] =
    useState("Learner's Guide")

  const [username, setUsername] =
    useState('admin')

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    navigate('/admin/login')
  }

  const handleSave = () => {
    alert('Settings Saved Successfully!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold">
            ⚙️ Settings
          </h1>

          <p className="mt-2 text-blue-100">
            Manage institute and admin preferences
          </p>
        </div>

        <div className="grid gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              🏫 Institute Information
            </h2>

            <div>
              <label className="block mb-2 font-medium">
                Institute Name
              </label>

              <input
                type="text"
                value={instituteName}
                onChange={(e) =>
                  setInstituteName(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              👤 Admin Account
            </h2>

            <div className="space-y-4">

              <div>
                <label className="block mb-2 font-medium">
                  Username
                </label>

                <input
                  type="text"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full border rounded-xl p-3"
                />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              🎨 Appearance
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="border-2 border-blue-500 rounded-2xl p-4 text-center cursor-pointer">
                🔵 Blue Theme
              </div>

              <div className="border rounded-2xl p-4 text-center cursor-pointer">
                🟣 Purple Theme
              </div>

              <div className="border rounded-2xl p-4 text-center cursor-pointer">
                ⚫ Dark Theme
              </div>

            </div>

          </div>

          <div className="flex gap-4">

            <button
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Save Settings
            </button>

            <button
              onClick={handleLogout}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}
