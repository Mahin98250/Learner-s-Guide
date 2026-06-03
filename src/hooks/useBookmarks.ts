import { useState, useCallback } from 'react';
import { bookmarkService } from '@/services/bookmarkService';

export const useBookmarks = (userId: string | undefined) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkBookmark = useCallback(async (materialId: string) => {
    if (!userId) return;
    try {
      const { isBookmarked: bookmarked } = await bookmarkService.isBookmarked(userId, materialId);
      setIsBookmarked(bookmarked);
    } catch (error) {
      console.error('Failed to check bookmark:', error);
    }
  }, [userId]);

  const toggleBookmark = useCallback(async (materialId: string) => {
    if (!userId) return;
    setLoading(true);
    try {
      if (isBookmarked) {
        await bookmarkService.removeBookmark(userId, materialId);
        setIsBookmarked(false);
      } else {
        await bookmarkService.addBookmark(userId, materialId);
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error('Failed to toggle bookmark:', error);
    } finally {
      setLoading(false);
    }
  }, [userId, isBookmarked]);

  return { isBookmarked, loading, checkBookmark, toggleBookmark };
};
