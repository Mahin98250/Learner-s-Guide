# Build a Complete Production-Ready Mobile-First Educational Platform

## Project Overview

Build a complete production-ready mobile-first educational platform called **Learner's Guide**.

The platform should have **two separate portals**:
1. **Student Portal** - Access learning materials
2. **Teacher/Admin Portal** - Create and manage content

### Tech Stack
- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Deployment**: Vercel/Netlify
- **State Management**: React Context + Hooks
- **Routing**: React Router v6

---

## Brand Identity

**App Name**: Learner's Guide  
**Tagline**: Study Smarter, Learn Faster

### Color Scheme
```
Primary Color: #2563EB (Bright Blue)
Secondary Color: #60A5FA (Light Blue)
Background: #F4F9FF (Very Light Blue)
Card Background: #FFFFFF (White)
Text Primary: #1F2937 (Dark Gray)
Text Secondary: #6B7280 (Medium Gray)
Border Color: #E5E7EB (Light Gray)
Accent: #10B981 (Green - for success)
Error: #EF4444 (Red)
Warning: #F59E0B (Orange)
```

### Design Style
- Professional and Modern
- Student-Friendly Interface
- Mobile App Feel with rounded corners
- Soft shadows and smooth animations
- Clean, minimalist design
- Accessibility-first approach

---

## Authentication System

### User Roles

#### Student Role
**Can:**
- View all materials (notes, videos, PDFs, Q&A)
- Search materials globally
- Download PDFs
- Watch videos with progress tracking
- Bookmark favorite notes
- View recent materials
- Access materials by class and subject
- View material details and descriptions

**Cannot:**
- Upload content
- Edit content
- Delete content
- Access admin features
- See student analytics

#### Teacher/Admin Role
**Can:**
- Login with email and password
- Create classes (Class 9, 10, 11, 12, etc.)
- Create subjects within classes
- Create material categories
- Upload notes (PDF/Images)
- Upload study materials
- Upload video links (YouTube, Vimeo)
- Upload question banks
- Create question papers
- Delete uploaded materials
- Edit material details
- View upload statistics
- Manage all classes and subjects
- Bulk upload materials

**Cannot:**
- Delete user accounts
- Access student personal data beyond interaction logs
- Modify other teachers' content (unless admin)

---

## Database Structure (Supabase PostgreSQL)

### Table: `users`
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'student' or 'teacher'
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: `classes`
```sql
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_name VARCHAR(255) NOT NULL, -- 'Class 9', 'Class 10', etc.
  description TEXT,
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: `subjects`
```sql
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_name VARCHAR(255) NOT NULL, -- 'Science', 'Maths', etc.
  icon VARCHAR(50), -- emoji or icon name
  description TEXT,
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: `materials`
```sql
CREATE TABLE materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50) NOT NULL, -- 'notes', 'q&a', 'worksheet', 'pyq', 'video', 'assignment'
  file_url TEXT, -- URL from Supabase Storage
  video_url TEXT, -- YouTube or Vimeo URL
  thumbnail_url TEXT,
  downloads_count INT DEFAULT 0,
  views_count INT DEFAULT 0,
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: `bookmarks`
```sql
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  material_id UUID NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, material_id)
);
```

### Table: `material_views`
```sql
CREATE TABLE material_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  material_id UUID NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Student Portal Features

### 1. Home Page (`/student`)
**Components:**
- Welcome banner with user greeting
- Search bar (instant search across all materials)
- "Quick Access" cards:
  - 📚 Classes
  - 📖 Subjects
  - 📝 Notes
  - 🎯 PYQs
  - 🎥 Videos
- Featured subjects carousel
- Recent materials list (last 10 viewed)
- Popular materials section
- Quick stats: "X Classes | Y Subjects | Z Materials"

### 2. Classes Page (`/student/classes`)
**Features:**
- Display all classes in grid/card format
- Classes: Class 9, 10, 11, 12
- Each card shows:
  - Class name
  - Number of subjects
  - Number of materials
- Click to open Subjects page
- Search classes

### 3. Subjects Page (`/student/classes/:classId/subjects`)
**Features:**
- Display all subjects for selected class
- Subjects with icons:
  - 🧪 Science
  - 📐 Maths
  - 📖 English
  - 🌍 SST (Social Studies)
  - 💻 Computer
  - 📚 Others (if applicable)
- Each subject card shows:
  - Subject name with icon
  - Number of materials
  - Preview of recent materials
- Click to open Materials page

### 4. Materials Page (`/student/classes/:classId/subjects/:subjectId`)
**Features:**
- Filter by material type:
  - 📄 Notes
  - ❓ Q&A
  - 📝 Worksheets
  - 🎯 Previous Year Questions (PYQ)
  - 🎥 Videos
  - 📋 Assignments
- Each material card shows:
  - Title
  - Type with icon
  - Short description
  - Download count
  - Views count
  - Bookmark button
  - Created date
- Click to view material details

### 5. Material Viewer (`/student/materials/:materialId`)
**Features:**
- Full-screen material viewer
- **For PDFs**: Integrated PDF viewer with:
  - Page navigation
  - Zoom controls
  - Search functionality
  - Download button
- **For Videos**: YouTube/Vimeo embedded player
- **For Notes**: Markdown or rich text renderer
- Sidebar showing:
  - Material title and description
  - Download button
  - Bookmark button (with heart icon)
  - Share button
  - Material metadata (size, created date, etc.)
- Related materials section
- Comments section (optional)

### 6. Bookmarks Page (`/student/bookmarks`)
**Features:**
- All bookmarked materials
- Filter by material type
- Search bookmarks
- Remove bookmark functionality
- Empty state message

### 7. Profile Page (`/student/profile`)
**Features:**
- User avatar
- User name and email
- Total materials viewed
- Total bookmarks
- Recent activity
- Settings button
- Logout button
- Theme toggle (Light/Dark mode)

### 8. Search Page (`/student/search`)
**Features:**
- Global search across:
  - Classes
  - Subjects
  - Materials
- Real-time search results
- Filter results by type
- Recent searches
- Popular searches
- "No results found" empty state

---

## Teacher/Admin Portal Features

### 1. Login Page (`/teacher/login`)
**Form Fields:**
- Email input
- Password input
- "Remember me" checkbox
- Login button
- "Forgot password" link
- Sign up link (optional)

**Features:**
- Form validation
- Error messages
- Loading state
- Redirect to dashboard on success
- Protected route (redirect to login if not authenticated)

### 2. Dashboard (`/teacher/dashboard`)
**Statistics Cards:**
- Total Classes
- Total Subjects
- Total Materials Uploaded
- Total Student Views

**Quick Actions:**
- Add New Class
- Add New Subject
- Upload Material

**Recent Activities:**
- Recently uploaded materials
- Recently created classes
- Recent student activity (views)

**Charts (optional):**
- Materials by type (pie chart)
- Upload trend (line chart)
- Most viewed materials (bar chart)

### 3. Classes Management (`/teacher/classes`)
**Features:**
- List all classes
- Add new class (modal/form)
- Edit class (modal/form)
- Delete class (with confirmation)
- Search classes
- Each class card shows:
  - Class name
  - Number of subjects
  - Number of materials
  - Created date
  - Action buttons (edit, delete)

### 4. Subjects Management (`/teacher/subjects`)
**Features:**
- List all subjects for all classes
- Filter subjects by class
- Add new subject (modal/form)
- Edit subject (modal/form)
- Delete subject (with confirmation)
- Each subject card shows:
  - Subject name
  - Class name
  - Number of materials
  - Icon
  - Created date
  - Action buttons

### 5. Materials Management (`/teacher/materials`)
**Features:**
- List all uploaded materials
- Filter by:
  - Material type (Notes, Q&A, Video, etc.)
  - Class
  - Subject
- Add new material (button to upload)
- Upload Material Form:
  - Title (required)
  - Description (optional)
  - Class (dropdown)
  - Subject (dropdown)
  - Material Type (dropdown)
  - File upload (PDF, Images, Videos)
  - Thumbnail (auto-generated or custom)
  - Submit button
- Edit material (modal/form)
- Delete material (with confirmation)
- Search materials
- Each material row/card shows:
  - Title
  - Type
  - Class & Subject
  - File size
  - Upload date
  - Downloads count
  - Views count
  - Action buttons (edit, delete, view)

### 6. Profile Page (`/teacher/profile`)
**Features:**
- Teacher name and email
- Avatar
- School/Institute name (optional)
- Bio
- Statistics:
  - Total materials uploaded
  - Total student views
  - Total downloads
- Settings button
- Change password button
- Logout button
- Theme toggle (Light/Dark mode)

---

## Search System

**Global Search** across:
- Classes
- Subjects
- Materials (title and description)

**Features:**
- Real-time search results as user types
- Filter results by type
- Highlight matching text
- Show result count
- Sort results by relevance
- Recent searches (stored in localStorage)
- Popular searches

---

## Navigation

### Student Portal Navigation
**Bottom Navigation Bar** (Mobile) / **Top Navigation** (Desktop):
- 🏠 Home → `/student`
- 📚 Classes → `/student/classes`
- 📖 Subjects → `/student/classes/:classId/subjects`
- 👤 Profile → `/student/profile`
- 🔍 Search → `/student/search`

**Sticky Navigation**: Remains visible while scrolling

### Teacher Portal Navigation
**Sidebar Navigation** (Desktop) / **Hamburger Menu** (Mobile):
- 📊 Dashboard → `/teacher/dashboard`
- 📚 Classes → `/teacher/classes`
- 📖 Subjects → `/teacher/subjects`
- 📤 Materials → `/teacher/materials`
- 👤 Profile → `/teacher/profile`
- 🚪 Logout

---

## Extra Features

### 1. Dark Mode
- Toggle button in header/profile
- Persist preference in localStorage
- System preference detection
- Smooth transitions

### 2. Bookmark System
- Heart icon on materials
- Add/remove bookmarks
- Dedicated bookmarks page
- Bookmark count badge

### 3. Loading States
- Skeleton loaders
- Smooth transitions
- Animated spinners

### 4. Empty States
- Friendly messages for:
  - No classes
  - No subjects
  - No materials
  - No bookmarks
  - No search results
- Illustrations or icons

### 5. Toast Notifications
- Success messages (material uploaded, bookmarked)
- Error messages (upload failed, network error)
- Info messages (material deleted, changes saved)
- Auto-dismiss after 3-5 seconds

### 6. Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1280px
- Touch-friendly buttons and inputs
- Optimized images

### 7. Performance
- Lazy loading of materials
- Image optimization
- Code splitting by route
- Caching strategies

### 8. SEO Optimization
- Meta tags (title, description)
- Open Graph tags for sharing
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt

### 9. Analytics (Optional)
- Track page views
- Track material downloads
- Track user engagement
- Display analytics in admin dashboard

---

## File Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Toast.tsx
│   │   └── Modal.tsx
│   ├── student/
│   │   ├── ClassCard.tsx
│   │   ├── SubjectCard.tsx
│   │   ├── MaterialCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── BookmarkButton.tsx
│   └── teacher/
│       ├── ClassForm.tsx
│       ├── SubjectForm.tsx
│       ├── MaterialUploadForm.tsx
│       ├── StatCard.tsx
│       └── RecentActivity.tsx
├── pages/
│   ├── student/
│   │   ├── Home.tsx
│   │   ├── Classes.tsx
│   │   ├── Subjects.tsx
│   │   ├── Materials.tsx
│   │   ├── MaterialDetail.tsx
│   │   ├── Bookmarks.tsx
│   │   ├── Profile.tsx
│   │   └── Search.tsx
│   ├── teacher/
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Classes.tsx
│   │   ├── Subjects.tsx
│   │   ├── Materials.tsx
│   │   ├── Profile.tsx
│   │   └── Settings.tsx
│   └── NotFound.tsx
├── layouts/
│   ├── StudentLayout.tsx
│   └── TeacherLayout.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useClasses.ts
│   ├── useSubjects.ts
│   ├── useMaterials.ts
│   ├── useBookmarks.ts
│   └── useSearch.ts
├── services/
│   ├── supabaseClient.ts
│   ├── authService.ts
│   ├── classService.ts
│   ├── subjectService.ts
│   ├── materialService.ts
│   ├── bookmarkService.ts
│   └── storageService.ts
├── context/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── ToastContext.tsx
├── types/
│   └── index.ts
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   ├── formatters.ts
│   └── validators.ts
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
├── App.tsx
├── index.tsx
└── tailwind.config.js
```

---

## Requirements

### Backend Requirements
- Supabase project with PostgreSQL
- Supabase authentication enabled
- Supabase Storage for file uploads
- Database tables as specified above
- Row Level Security (RLS) policies for data protection

### Frontend Requirements
- React 18+
- TypeScript
- React Router v6
- Tailwind CSS
- Supabase JS client
- React Query or similar for state management (optional)
- PDF.js for PDF viewing
- React-embed for video embedding

### Deployment Requirements
- Environment variables for Supabase
- CORS configuration
- CDN for static assets
- SSL certificates

---

## Implementation Steps

1. **Setup Supabase Project**
   - Create new project
   - Run database migration scripts
   - Configure authentication
   - Setup Storage buckets
   - Configure RLS policies

2. **Create React Application**
   - Install dependencies
   - Setup Tailwind CSS
   - Configure React Router
   - Setup environment variables

3. **Implement Authentication**
   - Login page
   - Sign up page (optional)
   - Auth context
   - Protected routes

4. **Build Student Portal**
   - Home page
   - Classes, Subjects, Materials pages
   - Material viewer
   - Bookmarks
   - Search
   - Profile

5. **Build Teacher Portal**
   - Login
   - Dashboard
   - CRUD operations for Classes, Subjects, Materials
   - File upload
   - Profile

6. **Implement Features**
   - Dark mode
   - Toast notifications
   - Loading states
   - Error handling

7. **Testing & Optimization**
   - Unit tests
   - Integration tests
   - Performance optimization
   - SEO optimization

8. **Deployment**
   - Deploy to Vercel/Netlify
   - Configure CI/CD
   - Monitor performance
   - Setup analytics

---

## Production Checklist

- [ ] Authentication & Authorization working correctly
- [ ] Database security with RLS policies
- [ ] File upload limits configured
- [ ] Environment variables secured
- [ ] Error handling for all edge cases
- [ ] Loading and empty states implemented
- [ ] Responsive design tested on all devices
- [ ] Dark mode working correctly
- [ ] Search functionality optimized
- [ ] Performance metrics optimized
- [ ] SEO tags configured
- [ ] Analytics implemented
- [ ] Legal pages (Terms, Privacy) added
- [ ] Contact/Support system implemented
- [ ] Backup and recovery procedures
- [ ] Rate limiting configured
- [ ] HTTPS enforced
- [ ] CORS configured correctly

---

## Notes

- Use TypeScript throughout for type safety
- Follow React best practices and hooks patterns
- Implement proper error boundaries
- Use lazy loading for routes
- Optimize images with modern formats (WebP)
- Implement proper caching strategies
- Use environment variables for configuration
- Implement comprehensive logging
- Follow accessibility guidelines (WCAG 2.1)
- Test on various devices and browsers

---

Generate the complete application with all files, configurations, and functionality as described above. The result should be production-ready and scalable.
