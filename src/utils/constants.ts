export const SUBJECT_ICONS: Record<string, string> = {
  'Science': '🧪',
  'Maths': '📐',
  'English': '📖',
  'SST': '🌍',
  'Computer': '💻',
  'Other': '📚',
};

export const MATERIAL_ICONS: Record<string, string> = {
  'notes': '📄',
  'q&a': '❓',
  'worksheet': '📝',
  'pyq': '🎯',
  'video': '🎥',
  'assignment': '📋',
};

export const CLASSES = [
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

export const SUBJECTS = [
  { name: 'Science', icon: '🧪' },
  { name: 'Maths', icon: '📐' },
  { name: 'English', icon: '📖' },
  { name: 'SST', icon: '🌍' },
  { name: 'Computer', icon: '💻' },
];

export const MATERIAL_TYPES = [
  { value: 'notes', label: 'Notes', icon: '📄' },
  { value: 'q&a', label: 'Q&A', icon: '❓' },
  { value: 'worksheet', label: 'Worksheets', icon: '📝' },
  { value: 'pyq', label: 'Previous Year Papers', icon: '🎯' },
  { value: 'video', label: 'Videos', icon: '🎥' },
  { value: 'assignment', label: 'Assignments', icon: '📋' },
];

export const NAVIGATION = {
  STUDENT: {
    HOME: '/student',
    CLASSES: '/student/classes',
    SUBJECTS: '/student/classes/:classId/subjects',
    MATERIALS: '/student/classes/:classId/subjects/:subjectId',
    MATERIAL_DETAIL: '/student/materials/:materialId',
    BOOKMARKS: '/student/bookmarks',
    PROFILE: '/student/profile',
    SEARCH: '/student/search',
  },
  TEACHER: {
    LOGIN: '/teacher/login',
    DASHBOARD: '/teacher/dashboard',
    CLASSES: '/teacher/classes',
    SUBJECTS: '/teacher/subjects',
    MATERIALS: '/teacher/materials',
    PROFILE: '/teacher/profile',
  },
};
