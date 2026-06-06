import { Link } from 'react-router-dom'

export default function Classes() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Classes</h1>

      <div className="flex flex-col gap-4">
        <Link
          to="/student/class/7"
          className="bg-blue-500 text-white p-4 rounded-xl"
        >
          Class 7
        </Link>

        <Link
          to="/student/class/8"
          className="bg-blue-500 text-white p-4 rounded-xl"
        >
          Class 8
        </Link>

        <Link
          to="/student/class/9"
          className="bg-blue-500 text-white p-4 rounded-xl"
        >
          Class 9
        </Link>
      </div>
    </div>
  )
}
