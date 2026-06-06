import { useSearchParams } from 'react-router-dom'

export default function MaterialViewer() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')

  const getTitle = () => {
    switch (type) {
      case 'notes':
        return '📚 Notes'
      case 'ppt':
        return '🖥️ PPT Presentations'
      case 'worksheets':
        return '📝 Worksheets & Assignments'
      default:
        return 'Study Material'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            {getTitle()}
          </h1>

          <p className="text-gray-600 mb-8">
            Material viewer is ready.
            Later we will connect PDFs, PPT files and worksheets from Firebase.
          </p>

          <div className="border-2 border-dashed border-blue-200 rounded-3xl h-96 flex items-center justify-center">

            <div className="text-center">

              <div className="text-7xl mb-4">
                📄
              </div>

              <h2 className="text-2xl font-bold text-gray-700">
                No Material Uploaded Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Admin can upload files from the dashboard.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
