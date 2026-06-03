import { supabase } from '@/lib/supabase';
import { Bookmark } from '@/types';

export const bookmarkService = {
  async addBookmark(userId: string, materialId: string) {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .insert([
          {
            user_id: userId,
            material_id: materialId,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return { bookmark: data as Bookmark, error: null };
    } catch (error) {
      return { bookmark: null, error };
    }
  },

  async removeBookmark(userId: string, materialId: string) {
    try {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', userId)
        .eq('material_id', materialId);

      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  async getBookmarks(userId: string) {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*, materials(*)')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { bookmarks: (data || []) as any[], error: null };
    } catch (error) {
      return { bookmarks: [], error };
    }
  },

  async isBookmarked(userId: string, materialId: string) {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', userId)
        .eq('material_id', materialId)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return { isBookmarked: !!data, error: null };
    } catch (error) {
      return { isBookmarked: false, error };
    }
  },
};
