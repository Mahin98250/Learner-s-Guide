import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()

  const navItems = [
    {
      name: 'Home',
      path: '/student/home',
      icon: '🏠',
    },
    {
      name: 'Classes',
      path: '/student/classes',
      icon: '📚',
    },
    {
      name: 'Subjects',
      path: '/student/subjects',
      icon: '📖',
    },
    {
      name: 'Materials',
      path: '/student/materials',
      icon: '📝',
    },
    {
      name: 'Profile',
      path: '/student/profile',
      icon: '👤',
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="grid grid-cols-5 max-w-md mx-auto">

        {navItems.map((item) => {
          const active = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-3 transition ${
                active
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs mt-1">
                {item.name}
              </span>
            </Link>
          )
        })}

      </div>
    </div>
  )
}
