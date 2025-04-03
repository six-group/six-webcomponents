import { Language } from '@six-group/ui-library';
import { useLocalStorage } from './useLocalStorage';

export function useLanguage() {
  return useLocalStorage<Language>('language', 'en');
}
