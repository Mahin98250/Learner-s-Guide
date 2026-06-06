import { Link } from 'react-router-dom'

const classes = [
{
id: '7',
title: 'Class 7',
description: 'Foundation learning with core subjects',
color: 'from-blue-500 to-cyan-500',
icon: '📘',
},
{
id: '8',
title: 'Class 8',
description: 'Strengthen concepts and understanding',
color: 'from-indigo-500 to-blue-500',
icon: '📗',
},
{
id: '9',
title: 'Class 9',
description: 'Build strong academic fundamentals',
color: 'from-purple-500 to-indigo-500',
icon: '📙',
},
{
id: '10',
title: 'Class 10',
description: 'Board exam preparation resources',
color: 'from-pink-500 to-purple-500',
icon: '🎯',
},
{
id: '11',
title: 'Class 11',
description: 'Advanced subject learning',
color: 'from-orange-500 to-red-500',
icon: '🚀',
},
{
id: '12',
title: 'Class 12',
description: 'Exam focused study materials',
color: 'from-emerald-500 to-green-500',
icon: '🏆',
},
]

export default function Classes() {
return ( <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 p-6"> <div className="max-w-7xl mx-auto">

```
    <div className="text-center mb-10">
      <h1 className="text-5xl font-black text-blue-700">
        Classes
      </h1>

      <p className="text-gray-600 mt-3 text-lg">
        Select your class to start learning
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {classes.map((item) => (
        <Link
          key={item.id}
          to={`/student/class/${item.id}`}
          className="group"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div
              className={`absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-br ${item.color} opacity-20`}
            />

            <div className="relative">

              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-800">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-500">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm font-semibold text-blue-700">
                  Open Class
                </span>

                <span className="text-xl transition group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </div>
        </Link>
      ))}

    </div>

  </div>
</div>
```

)
}
