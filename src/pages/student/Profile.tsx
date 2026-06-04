import React, { useState } from 'react';
import {
  User,
  LogOut,
  Moon,
  Sun,
  Bell,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  CheckCircle2,
  FileText,
  TrendingUp,
  ChevronRight,
  Settings as SettingsIcon,
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';

interface ProfileData {
  name: string;
  class: string;
  institute: string;
  email: string;
  phone: string;
  city: string;
  avatar: string;
  attendance: number;
  assignmentsCompleted: number;
  worksheetsCompleted: number;
  progressPercentage: number;
}

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Mock student data
  const studentData: ProfileData = {
    name: 'Rahul Kumar',
    class: 'Class 10',
    institute: 'Central High School',
    email: 'rahul.kumar@email.com',
    phone: '+91 98765 43210',
    city: 'Mumbai',
    avatar: '👨‍🎓',
    attendance: 92,
    assignmentsCompleted: 24,
    worksheetsCompleted: 18,
    progressPercentage: 78,
  };

  const handleLogout = () => {
    alert('Logging out...');
    // Add logout logic here
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={`min-h-screen pb-24 md:pb-6 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
    }`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-800 border-b border-gray-700'
          : 'bg-white border-b border-blue-100 shadow-sm'
      }`}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-blue-700'
          }`}>
            My Profile
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`p-3 rounded-full transition-all duration-300 ${
                notificationsEnabled
                  ? darkMode
                    ? 'bg-blue-900 text-blue-300'
                    : 'bg-blue-100 text-blue-700'
                  : darkMode
                    ? 'bg-gray-700 text-gray-400'
                    : 'bg-gray-200 text-gray-400'
              }`}
              aria-label="Toggle notifications"
            >
              <Bell size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Header Card */}
        <div className={`rounded-3xl backdrop-blur-md p-6 transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 shadow-2xl'
            : 'bg-gradient-to-br from-white/60 to-white/40 border border-white/40 shadow-xl'
        } animate-fade-in`}>
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center text-6xl mb-4 transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg'
                : 'bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg'
            }`}>
              {studentData.avatar}
            </div>

            {/* Student Name */}
            <h2 className={`text-3xl font-bold mb-1 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {studentData.name}
            </h2>

            {/* Class and Institute */}
            <div className={`space-y-2 mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p className="text-lg font-semibold text-blue-600">{studentData.class}</p>
              <p className="text-sm flex items-center justify-center gap-1">
                <MapPin size={16} />
                {studentData.institute}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300 active:scale-95 transform shadow-lg">
                Edit Profile
              </button>
              <button className={`flex-1 font-semibold py-3 rounded-2xl transition-all duration-300 active:scale-95 transform ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}>
                <User size={18} className="mx-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. Personal Information Section */}
        <div className={`rounded-3xl backdrop-blur-md p-6 transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 shadow-xl'
            : 'bg-gradient-to-br from-white/60 to-white/40 border border-white/40 shadow-lg'
        } animate-slide-up`}>
          <button
            onClick={() => toggleSection('personal')}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                darkMode
                  ? 'bg-blue-900/50 group-hover:bg-blue-900/70'
                  : 'bg-blue-100 group-hover:bg-blue-200'
              }`}>
                <User className={`${darkMode ? 'text-blue-300' : 'text-blue-600'}`} size={24} />
              </div>
              <h3 className={`text-xl font-bold transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Information
              </h3>
            </div>
            <ChevronRight
              size={24}
              className={`transition-transform duration-300 ${
                expandedSection === 'personal' ? 'rotate-90' : ''
              } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
            />
          </button>

          {expandedSection === 'personal' && (
            <div className="mt-6 space-y-4 animate-fade-in">
              {/* Email */}
              <div className={`p-4 rounded-2xl transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-blue-500" size={20} />
                  <span className={`text-sm font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Email
                  </span>
                </div>
                <p className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {studentData.email}
                </p>
              </div>

              {/* Phone */}
              <div className={`p-4 rounded-2xl transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="text-green-500" size={20} />
                  <span className={`text-sm font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Phone
                  </span>
                </div>
                <p className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {studentData.phone}
                </p>
              </div>

              {/* City */}
              <div className={`p-4 rounded-2xl transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-red-500" size={20} />
                  <span className={`text-sm font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    City
                  </span>
                </div>
                <p className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {studentData.city}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 2. Academic Progress Section */}
        <div className={`rounded-3xl backdrop-blur-md p-6 transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 shadow-xl'
            : 'bg-gradient-to-br from-white/60 to-white/40 border border-white/40 shadow-lg'
        } animate-slide-up`}>
          <button
            onClick={() => toggleSection('academic')}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                darkMode
                  ? 'bg-purple-900/50 group-hover:bg-purple-900/70'
                  : 'bg-purple-100 group-hover:bg-purple-200'
              }`}>
                <TrendingUp className={`${darkMode ? 'text-purple-300' : 'text-purple-600'}`} size={24} />
              </div>
              <h3 className={`text-xl font-bold transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Academic Progress
              </h3>
            </div>
            <ChevronRight
              size={24}
              className={`transition-transform duration-300 ${
                expandedSection === 'academic' ? 'rotate-90' : ''
              } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
            />
          </button>

          {expandedSection === 'academic' && (
            <div className="mt-6 space-y-4 animate-fade-in">
              {/* Progress Percentage Card */}
              <div className={`p-5 rounded-2xl transition-colors ${
                darkMode ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/50' : 'bg-gradient-to-br from-blue-100 to-blue-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold ${
                    darkMode ? 'text-blue-200' : 'text-blue-700'
                  }`}>
                    Overall Progress
                  </span>
                  <span className={`text-2xl font-bold ${
                    darkMode ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    {studentData.progressPercentage}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-blue-200'
                }`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${studentData.progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Attendance Card */}
              <div className={`p-5 rounded-2xl transition-colors ${
                darkMode ? 'bg-gradient-to-br from-green-900/50 to-green-800/50' : 'bg-gradient-to-br from-green-100 to-green-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} size={20} />
                    <span className={`font-semibold ${
                      darkMode ? 'text-green-200' : 'text-green-700'
                    }`}>
                      Attendance
                    </span>
                  </div>
                  <span className={`text-2xl font-bold ${
                    darkMode ? 'text-green-300' : 'text-green-600'
                  }`}>
                    {studentData.attendance}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-green-200'
                }`}>
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                    style={{ width: `${studentData.attendance}%` }}
                  />
                </div>
              </div>

              {/* Assignments Card */}
              <div className={`p-5 rounded-2xl transition-colors ${
                darkMode ? 'bg-gradient-to-br from-orange-900/50 to-orange-800/50' : 'bg-gradient-to-br from-orange-100 to-orange-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className={`${darkMode ? 'text-orange-400' : 'text-orange-600'}`} size={20} />
                    <span className={`font-semibold ${
                      darkMode ? 'text-orange-200' : 'text-orange-700'
                    }`}>
                      Assignments Completed
                    </span>
                  </div>
                  <span className={`text-2xl font-bold ${
                    darkMode ? 'text-orange-300' : 'text-orange-600'
                  }`}>
                    {studentData.assignmentsCompleted}
                  </span>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-orange-300' : 'text-orange-600'
                }`}>
                  Keep up the great work! 🎯
                </p>
              </div>

              {/* Worksheets Card */}
              <div className={`p-5 rounded-2xl transition-colors ${
                darkMode ? 'bg-gradient-to-br from-indigo-900/50 to-indigo-800/50' : 'bg-gradient-to-br from-indigo-100 to-indigo-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
                    <span className={`font-semibold ${
                      darkMode ? 'text-indigo-200' : 'text-indigo-700'
                    }`}>
                      Worksheets Completed
                    </span>
                  </div>
                  <span className={`text-2xl font-bold ${
                    darkMode ? 'text-indigo-300' : 'text-indigo-600'
                  }`}>
                    {studentData.worksheetsCompleted}
                  </span>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-indigo-300' : 'text-indigo-600'
                }`}>
                  Practice makes perfect! ✨
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 3. Institute Information Section */}
        <div className={`rounded-3xl backdrop-blur-md p-6 transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 shadow-xl'
            : 'bg-gradient-to-br from-white/60 to-white/40 border border-white/40 shadow-lg'
        } animate-slide-up`}>
          <button
            onClick={() => toggleSection('institute')}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                darkMode
                  ? 'bg-pink-900/50 group-hover:bg-pink-900/70'
                  : 'bg-pink-100 group-hover:bg-pink-200'
              }`}>
                <BookOpen className={`${darkMode ? 'text-pink-300' : 'text-pink-600'}`} size={24} />
              </div>
              <h3 className={`text-xl font-bold transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Institute Information
              </h3>
            </div>
            <ChevronRight
              size={24}
              className={`transition-transform duration-300 ${
                expandedSection === 'institute' ? 'rotate-90' : ''
              } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
            />
          </button>

          {expandedSection === 'institute' && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <div className={`p-4 rounded-2xl transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Institute Name
                </p>
                <p className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {studentData.institute}
                </p>
              </div>

              <div className={`p-4 rounded-2xl transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Current Class
                </p>
                <p className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {studentData.class}
                </p>
              </div>

              <div className={`p-4 rounded-2xl transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Year of Admission
                </p>
                <p className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  2024
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. Settings Section */}
        <div className={`rounded-3xl backdrop-blur-md p-6 transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 shadow-xl'
            : 'bg-gradient-to-br from-white/60 to-white/40 border border-white/40 shadow-lg'
        } animate-slide-up`}>
          <button
            onClick={() => toggleSection('settings')}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-700 group-hover:bg-gray-600'
                  : 'bg-gray-200 group-hover:bg-gray-300'
              }`}>
                <SettingsIcon className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} size={24} />
              </div>
              <h3 className={`text-xl font-bold transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Settings
              </h3>
            </div>
            <ChevronRight
              size={24}
              className={`transition-transform duration-300 ${
                expandedSection === 'settings' ? 'rotate-90' : ''
              } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
            />
          </button>

          {expandedSection === 'settings' && (
            <div className="mt-6 space-y-4 animate-fade-in">
              {/* Dark Mode Toggle */}
              <div className={`p-4 rounded-2xl flex items-center justify-between transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <div className="flex items-center gap-3">
                  {darkMode ? (
                    <Moon className="text-yellow-400" size={20} />
                  ) : (
                    <Sun className="text-yellow-500" size={20} />
                  )}
                  <span className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Dark Mode
                  </span>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                      darkMode ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Notification Toggle */}
              <div className={`p-4 rounded-2xl flex items-center justify-between transition-colors ${
                darkMode ? 'bg-gray-700/50' : 'bg-white/50'
              }`}>
                <div className="flex items-center gap-3">
                  <Bell className="text-blue-500" size={20} />
                  <span className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Notifications
                  </span>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                    notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label="Toggle notifications"
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                      notificationsEnabled ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 active:scale-95 transform shadow-lg flex items-center justify-center gap-3 touch-target"
              >
                <LogOut size={22} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom Spacing */}
        <div className="h-6"></div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
