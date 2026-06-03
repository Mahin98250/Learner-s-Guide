import { useState, useEffect } from 'react';
import { Class } from '@/types';
import { classService } from '@/services/classService';

export const useClasses = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const { classes: data, error: fetchError } = await classService.getClasses();
      if (fetchError) throw fetchError;
      setClasses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch classes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return { classes, loading, error, refetch: fetchClasses };
};
