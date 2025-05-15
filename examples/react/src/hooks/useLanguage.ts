import { Language } from '@six-group/ui-library';
import { useLocalStorage } from './useLocalStorage';

export function useLanguage(fallbackLanguage: Language = 'de') {
  return useLocalStorage<Language>('language', fallbackLanguage);
}
