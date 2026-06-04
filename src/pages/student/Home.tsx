import logo from '../../assets/logo.png'

export default function Home(){
return (
<div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6'>
<div className='max-w-5xl mx-auto'>
<div className='bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 text-center border border-blue-100'>
<img src={logo} alt='Learners Guide' className='w-28 h-28 mx-auto mb-4 object-contain'/>
<h1 className='text-4xl font-bold text-blue-700'>Learner\'s Guide</h1>
<p className='text-gray-600 mt-2'>Study Smarter • Learn Faster</p>
</div>
<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
<div className='bg-white rounded-2xl p-5 shadow hover:shadow-xl transition'>📚 Classes</div>
<div className='bg-white rounded-2xl p-5 shadow hover:shadow-xl transition'>📖 Subjects</div>
<div className='bg-white rounded-2xl p-5 shadow hover:shadow-xl transition'>📝 Notes</div>
<div className='bg-white rounded-2xl p-5 shadow hover:shadow-xl transition'>🎯 Q&A</div>
</div>
<div className='mt-8 bg-blue-600 text-white rounded-3xl p-6 shadow-xl'>
<h2 className='text-2xl font-bold'>Welcome Back!</h2>
<p className='mt-2'>Access study materials, notes, worksheets and previous year papers.</p>
</div>
</div>
</div>
)}