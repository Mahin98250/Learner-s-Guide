import { supabase } from '@/lib/supabase';
import { Class } from '@/types';

export const classService = {
  async getClasses() {
    try {
      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .order('class_name', { ascending: true });

      if (error) throw error;
      return { classes: (data || []) as Class[], error: null };
    } catch (error) {
      return { classes: [], error };
    }
  },

  async getClassById(classId: string) {
    try {
      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .eq('id', classId)
        .single();

      if (error) throw error;
      return { class: data as Class, error: null };
    } catch (error) {
      return { class: null, error };
    }
  },

  async createClass(classData: Omit<Class, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('classes')
        .insert([classData])
        .select()
        .single();

      if (error) throw error;
      return { class: data as Class, error: null };
    } catch (error) {
      return { class: null, error };
    }
  },

  async updateClass(classId: string, updates: Partial<Class>) {
    try {
      const { data, error } = await supabase
        .from('classes')
        .update(updates)
        .eq('id', classId)
        .select()
        .single();

      if (error) throw error;
      return { class: data as Class, error: null };
    } catch (error) {
      return { class: null, error };
    }
  },

  async deleteClass(classId: string) {
    try {
      const { error } = await supabase
        .from('classes')
        .delete()
        .eq('id', classId);

      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  },
};
