import { useState, useEffect } from 'react';
import { Material } from '@/types';
import { materialService } from '@/services/materialService';

export const useMaterials = (subjectId: string | undefined) => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMaterials = async () => {
    if (!subjectId) return;
    setLoading(true);
    try {
      const { materials: data, error: fetchError } = await materialService.getMaterialsBySubject(subjectId);
      if (fetchError) throw fetchError;
      setMaterials(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch materials');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, [subjectId]);

  return { materials, loading, error, refetch: fetchMaterials };
};
