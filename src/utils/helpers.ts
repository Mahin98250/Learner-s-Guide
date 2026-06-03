import { MaterialType } from '@/types';

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

export const getMaterialIcon = (type: MaterialType): string => {
  const icons: Record<MaterialType, string> = {
    'notes': '📄',
    'q&a': '❓',
    'worksheet': '📝',
    'pyq': '🎯',
    'video': '🎥',
    'assignment': '📋',
  };
  return icons[type] || '📦';
};

export const getSubjectIcon = (subject: string): string => {
  const icons: Record<string, string> = {
    'Science': '🧪',
    'Maths': '📐',
    'English': '📖',
    'SST': '🌍',
    'Computer': '💻',
  };
  return icons[subject] || '📚';
};

export const truncateText = (text: string, length: number): string => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
