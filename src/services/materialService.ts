import { supabase } from '@/lib/supabase';
import { Material, MaterialType } from '@/types';

export const materialService = {
  async getMaterialsBySubject(subjectId: string) {
    try {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .eq('subject_id', subjectId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { materials: (data || []) as Material[], error: null };
    } catch (error) {
      return { materials: [], error };
    }
  },

  async getMaterialsByType(subjectId: string, type: MaterialType) {
    try {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .eq('subject_id', subjectId)
        .eq('type', type)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { materials: (data || []) as Material[], error: null };
    } catch (error) {
      return { materials: [], error };
    }
  },

  async getMaterialById(materialId: string) {
    try {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .eq('id', materialId)
        .single();

      if (error) throw error;
      return { material: data as Material, error: null };
    } catch (error) {
      return { material: null, error };
    }
  },

  async createMaterial(materialData: Omit<Material, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('materials')
        .insert([materialData])
        .select()
        .single();

      if (error) throw error;
      return { material: data as Material, error: null };
    } catch (error) {
      return { material: null, error };
    }
  },

  async updateMaterial(materialId: string, updates: Partial<Material>) {
    try {
      const { data, error } = await supabase
        .from('materials')
        .update(updates)
        .eq('id', materialId)
        .select()
        .single();

      if (error) throw error;
      return { material: data as Material, error: null };
    } catch (error) {
      return { material: null, error };
    }
  },

  async deleteMaterial(materialId: string) {
    try {
      const { error } = await supabase
        .from('materials')
        .delete()
        .eq('id', materialId);

      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  async searchMaterials(query: string) {
    try {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
        .limit(20);

      if (error) throw error;
      return { materials: (data || []) as Material[], error: null };
    } catch (error) {
      return { materials: [], error };
    }
  },
};
