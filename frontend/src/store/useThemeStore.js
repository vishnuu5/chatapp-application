import { create } from "zustand";

const DEFAULT_THEME = "coffee";
const ALLOWED_THEMES = ["coffee", "dark", "light"]; // extend as needed

export const useThemeStore = create((set) => {
  let initialTheme = DEFAULT_THEME;
  if (typeof localStorage !== "undefined") {
    const storedTheme = localStorage.getItem("chat-theme");
    if (ALLOWED_THEMES.includes(storedTheme)) initialTheme = storedTheme;
  }

  return {
    theme: initialTheme,
    setTheme: (theme) => {
      if (ALLOWED_THEMES.includes(theme)) {
        localStorage.setItem("chat-theme", theme);
        set({ theme });
      }
    },
  };
});
