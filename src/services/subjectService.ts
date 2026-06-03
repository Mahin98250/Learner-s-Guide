import { supabase } from '@/lib/supabase';
import { Subject } from '@/types';

export const subjectService = {
  async getSubjectsByClass(classId: string) {
    try {
      const { data, error } = await supabase
        .from('subjects')
        .select('*')
        .eq('class_id', classId)
        .order('subject_name', { ascending: true });

      if (error) throw error;
      return { subjects: (data || []) as Subject[], error: null };
    } catch (error) {
      return { subjects: [], error };
    }
  },

  async getSubjectById(subjectId: string) {
    try {
      const { data, error } = await supabase
        .from('subjects')
        .select('*')
        .eq('id', subjectId)
        .single();

      if (error) throw error;
      return { subject: data as Subject, error: null };
    } catch (error) {
      return { subject: null, error };
    }
  },

  async createSubject(subjectData: Omit<Subject, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('subjects')
        .insert([subjectData])
        .select()
        .single();

      if (error) throw error;
      return { subject: data as Subject, error: null };
    } catch (error) {
      return { subject: null, error };
    }
  },

  async updateSubject(subjectId: string, updates: Partial<Subject>) {
    try {
      const { data, error } = await supabase
        .from('subjects')
        .update(updates)
        .eq('id', subjectId)
        .select()
        .single();

      if (error) throw error;
      return { subject: data as Subject, error: null };
    } catch (error) {
      return { subject: null, error };
    }
  },

  async deleteSubject(subjectId: string) {
    try {
      const { error } = await supabase
        .from('subjects')
        .delete()
        .eq('id', subjectId);

      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  },
};
