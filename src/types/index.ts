// User Types
export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

// Class Types
export interface Class {
  id: string;
  class_name: string;
  description?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  subject_count?: number;
  material_count?: number;
}

// Subject Types
export type SubjectName = 'Science' | 'Maths' | 'English' | 'SST' | 'Computer' | 'Other';

export interface Subject {
  id: string;
  class_id: string;
  subject_name: SubjectName;
  icon: string;
  description?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  material_count?: number;
}

// Material Types
export type MaterialType = 'notes' | 'q&a' | 'worksheet' | 'pyq' | 'video' | 'assignment';

export interface Material {
  id: string;
  subject_id: string;
  title: string;
  description?: string;
  type: MaterialType;
  file_url?: string;
  video_url?: string;
  thumbnail_url?: string;
  downloads_count: number;
  views_count: number;
  created_by: string;
  created_at: string;
  updated_at: string;
  file_size?: number;
}

// Bookmark Types
export interface Bookmark {
  id: string;
  user_id: string;
  material_id: string;
  created_at: string;
}

// Material View Types
export interface MaterialView {
  id: string;
  user_id: string;
  material_id: string;
  viewed_at: string;
}

// Auth Types
export interface AuthSession {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Toast Types
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

// Search Types
export interface SearchResult {
  type: 'class' | 'subject' | 'material';
  id: string;
  title: string;
  description?: string;
}
