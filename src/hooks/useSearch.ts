import { useState, useCallback } from 'react';
import { materialService } from '@/services/materialService';
import { Material } from '@/types';

export const useSearch = () => {
  const [results, setResults] = useState<Material[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const { materials, error: searchError } = await materialService.searchMaterials(query);
      if (searchError) throw searchError;
      setResults(materials);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
};
