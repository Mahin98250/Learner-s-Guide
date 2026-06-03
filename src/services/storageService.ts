import { supabase } from '@/lib/supabase';

export const storageService = {
  async uploadMaterial(file: File, path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('materials')
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async deleteMaterial(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('materials')
        .remove([path]);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  getPublicUrl(path: string) {
    const { data } = supabase.storage.from('materials').getPublicUrl(path);
    return data.publicUrl;
  },

  async uploadThumbnail(file: File, path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('thumbnails')
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  getThumbnailUrl(path: string) {
    const { data } = supabase.storage.from('thumbnails').getPublicUrl(path);
    return data.publicUrl;
  },
};
