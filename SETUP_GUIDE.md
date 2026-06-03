# Learner's Guide - Setup and Deployment Guide

## Quick Start Options

You can generate this complete platform using any of these AI code generators:

### Option 1: **Lovable** (Recommended for Full Stack)
🔗 **https://lovable.dev**
- Best for complete React + Supabase applications
- Real-time collaboration features
- Integrated deployment
- Steps:
  1. Go to Lovable.dev
  2. Create new project
  3. Paste the `PLATFORM_PROMPT.md` content
  4. Wait for generation (5-10 minutes)
  5. Review and customize
  6. Deploy directly from Lovable

### Option 2: **Bolt.new** (Fast Generation)
🔗 **https://bolt.new**
- Quick code generation
- Full-stack capable
- Steps:
  1. Go to Bolt.new
  2. Paste prompt from `PLATFORM_PROMPT.md`
  3. Select React + Supabase
  4. Generate code
  5. Export and push to GitHub

### Option 3: **v0.dev** (Vercel's AI Generator)
🔗 **https://v0.dev**
- Component-based generation
- Tailwind CSS optimized
- Vercel integration
- Steps:
  1. Go to v0.dev
  2. Create new project
  3. Generate UI components
  4. Export to Next.js/React

### Option 4: **Claude** (ChatGPT via Claude API)
🔗 **https://claude.ai**
- Long-form code generation
- Detailed explanations
- Steps:
  1. Go to Claude.ai
  2. Start conversation
  3. Paste prompt from `PLATFORM_PROMPT.md`
  4. Request "Generate complete React application"
  5. Copy generated code

### Option 5: **Cursor** (AI Code Editor)
🔗 **https://cursor.com**
- Local development with AI
- Steps:
  1. Download Cursor
  2. Create new project folder
  3. Press Ctrl+K (⌘K on Mac)
  4. Paste prompt
  5. Generate and edit in real-time

### Option 6: **Windsurf** (Browser-based IDE)
🔗 **https://windsurf.dev**
- Full development environment
- Terminal access
- Steps:
  1. Open Windsurf
  2. Create new workspace
  3. Paste prompt
  4. Generate code
  5. Use terminal for deployment

### Option 7: **Replit AI** (Online IDE)
🔗 **https://replit.com**
- Complete online development
- Built-in hosting
- Steps:
  1. Go to Replit.com
  2. Create new project
  3. Select React template
  4. Use Replit AI (Ctrl+K) with prompt
  5. Deploy with Replit hosting

### Option 8: **ChatGPT** (OpenAI)
🔗 **https://chatgpt.com**
- Use GPT-4 with Code Interpreter
- Steps:
  1. Go to ChatGPT.com (ChatGPT Plus required)
  2. Start new conversation
  3. Paste prompt from `PLATFORM_PROMPT.md`
  4. Request full code generation
  5. Download and deploy

---

## Recommended Generation Flow

### Best Overall: **Lovable** ⭐⭐⭐⭐⭐
```
1. Copy PLATFORM_PROMPT.md content
2. Go to Lovable.dev
3. Paste into new project
4. Let it generate (10 min)
5. Review components and database
6. Deploy to Vercel/Netlify from Lovable
```

### Fastest: **Bolt.new** ⭐⭐⭐⭐
```
1. Go to Bolt.new
2. Paste prompt
3. Wait 5 minutes for generation
4. Download zip file
5. Push to GitHub:
   git clone <your-repo>
   cd Learner-s-Guide
   npm install
   git add .
   git commit -m "Add generated React application"
   git push origin main
```

### Most Detailed: **Claude** ⭐⭐⭐⭐⭐
```
1. Open Claude.ai
2. Paste PLATFORM_PROMPT.md
3. Ask: "Generate the complete React + Supabase application"
4. Claude generates all files
5. Copy files to local project
6. Setup Supabase
7. Deploy
```

---

## Manual Setup After Generation

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Setup Supabase

#### Create Supabase Project
```bash
# Go to https://supabase.com
# Create new project
# Get your:
# - Project URL
# - Anonymous Key
# - Service Role Key
```

#### Create Environment Variables
```bash
# Create .env.local
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

#### Setup Database Tables
Run these SQL scripts in Supabase SQL Editor:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Classes table
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_name VARCHAR(255) NOT NULL,
  description TEXT,
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subjects table
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_name VARCHAR(255) NOT NULL,
  icon VARCHAR(50),
  description TEXT,
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Materials table
CREATE TABLE materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50) NOT NULL,
  file_url TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  downloads_count INT DEFAULT 0,
  views_count INT DEFAULT 0,
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookmarks table
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  material_id UUID NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, material_id)
);

-- Material views table
CREATE TABLE material_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  material_id UUID NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Enable Authentication
- Go to Supabase dashboard → Authentication
- Enable Email/Password authentication
- Enable "Confirm email" (optional)
- Configure redirect URLs

#### Setup Storage
```sql
-- In Supabase Storage, create buckets:
-- 1. materials (for PDFs, notes, etc.)
-- 2. thumbnails (for material thumbnails)
-- 3. avatars (for user avatars)
```

#### Configure RLS Policies

```sql
-- Example RLS policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

-- Users can read all users
CREATE POLICY "Users can read all users"
  ON users FOR SELECT
  USING (true);

-- Users can only update their own profile
CREATE POLICY "Users can update their own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Anyone can read materials
CREATE POLICY "Anyone can read materials"
  ON materials FOR SELECT
  USING (true);

-- Teachers can insert materials
CREATE POLICY "Teachers can insert materials"
  ON materials FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role = 'teacher'
    )
  );
```

### 3. Local Development

```bash
# Start development server
npm run dev
# or
yarn dev

# Application will be available at http://localhost:5173
```

### 4. Build for Production

```bash
# Create optimized build
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

---

## Deployment Options

### Deploy to Vercel (Recommended) ⭐⭐⭐⭐⭐

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Set environment variables in Vercel dashboard
# VITE_SUPABASE_URL
# VITE_SUPABASE_ANON_KEY

# 4. Your app is live!
```

**Or via GitHub:**
1. Push code to GitHub
2. Go to Vercel.com
3. Import repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Deploy
netlify deploy

# 3. Connect to GitHub for auto-deployment
```

### Deploy to GitHub Pages

```bash
# Add to package.json:
"homepage": "https://yourusername.github.io/Learner-s-Guide"

# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Deploy to Heroku

```bash
# 1. Install Heroku CLI
# 2. Login
heroku login

# 3. Create app
heroku create your-app-name

# 4. Add buildpack
heroku buildpacks:add heroku/nodejs

# 5. Set environment variables
heroku config:set VITE_SUPABASE_URL=...
heroku config:set VITE_SUPABASE_ANON_KEY=...

# 6. Deploy
git push heroku main
```

---

## GitHub Pages Hosting

### Enable GitHub Pages

1. **Go to repository settings**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created after first deploy)
   - Save

2. **Deploy with script**
   ```bash
   npm run deploy
   ```

3. **Your site is live at**
   ```
   https://Mahin98250.github.io/Learner-s-Guide
   ```

---

## Testing the Application

### Create Test Accounts

#### Teacher Account
- Email: `teacher@example.com`
- Password: `TeacherPassword123!`
- Role: teacher

#### Student Account
- Email: `student@example.com`
- Password: `StudentPassword123!`
- Role: student

### Test Workflows

1. **Student Flow**
   - Login as student
   - Browse classes → subjects → materials
   - Download a material
   - Bookmark a material
   - Search for materials
   - View profile
   - Enable dark mode

2. **Teacher Flow**
   - Login as teacher
   - Create a class
   - Create subjects
   - Upload materials
   - Edit materials
   - View statistics
   - Manage content

---

## Troubleshooting

### "Supabase connection failed"
- Check if VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set
- Verify keys in .env.local
- Check Supabase project status

### "CORS error"
- Add your domain to Supabase → Project Settings → API
- Check CORS configuration in Supabase

### "404 on deployment"
- Ensure build command is `npm run build`
- Check dist/ folder is created
- Verify homepage URL in package.json

### "Material upload fails"
- Check storage bucket permissions
- Verify RLS policies
- Check file size limits

---

## Performance Optimization

### Image Optimization
```bash
npm install @vueuse/core vite-plugin-imagemin
```

### Bundle Analysis
```bash
npm install --save-dev rollup-plugin-visualizer
```

### Code Splitting
- Already configured in React Router with lazy loading

### Caching Strategy
- Configure in vercel.json or netlify.toml

---

## Next Steps

1. ✅ Generate code using one of the AI tools above
2. ✅ Setup Supabase project and database
3. ✅ Configure environment variables
4. ✅ Test locally with `npm run dev`
5. ✅ Deploy to Vercel/Netlify
6. ✅ Add custom domain
7. ✅ Setup monitoring and analytics
8. ✅ Create admin accounts for teachers
9. ✅ Upload sample materials
10. ✅ Share with students!

---

## Support & Resources

- **React Documentation**: https://react.dev
- **Supabase Documentation**: https://supabase.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com
- **Deployment Guides**: 
  - Vercel: https://vercel.com/docs
  - Netlify: https://docs.netlify.com

---

## License

MIT License - Feel free to use, modify, and distribute!

---

**Happy coding! 🚀 Good luck with your educational platform!**
