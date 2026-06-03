import { useState, useEffect } from 'react';
import { Subject } from '@/types';
import { subjectService } from '@/services/subjectService';

export const useSubjects = (classId: string | undefined) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubjects = async () => {
    if (!classId) return;
    setLoading(true);
    try {
      const { subjects: data, error: fetchError } = await subjectService.getSubjectsByClass(classId);
      if (fetchError) throw fetchError;
      setSubjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch subjects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, [classId]);

  return { subjects, loading, error, refetch: fetchSubjects };
};
