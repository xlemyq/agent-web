import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  toggle: () => void;
  setTheme: (theme: Theme) => void;
}

const isDarkPreferred = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  toggle: () =>
    set((state) => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', next === 'dark');
        localStorage.setItem('up5star-theme', next);
      }
      return { theme: next };
    }),
  setTheme: (theme) =>
    set(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('up5star-theme', theme);
      }
      return { theme };
    })
}));

export const initializeThemeFromStorage = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('up5star-theme');
  if (stored === 'dark' || stored === 'light') {
    document.documentElement.classList.toggle('dark', stored === 'dark');
    return stored;
  }
  const preferredDark = isDarkPreferred();
  const fallback: Theme = preferredDark ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', fallback === 'dark');
  return fallback;
};
