import { createContext, useContext, ReactNode, useState, useEffect } from "react";

// Custom colors based on the design requirements
export const colors = {
  navy: {
    900: '#0f172a',
    800: '#172554',
    700: '#1e3a8a'
  },
  teal: {
    600: '#0d9488',
    500: '#14b8a6'
  },
  electric: {
    600: '#2563eb', 
    500: '#3b82f6'
  },
  gold: {
    500: '#eab308',
    400: '#facc15'
  }
};

type ThemeContextType = {
  colors: typeof colors;
};

const ThemeContext = createContext<ThemeContextType>({
  colors,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Apply theme-specific styles to root
    document.documentElement.style.setProperty('--color-navy-900', colors.navy[900]);
    document.documentElement.style.setProperty('--color-navy-800', colors.navy[800]);
    document.documentElement.style.setProperty('--color-navy-700', colors.navy[700]);
    document.documentElement.style.setProperty('--color-teal-600', colors.teal[600]);
    document.documentElement.style.setProperty('--color-teal-500', colors.teal[500]);
    document.documentElement.style.setProperty('--color-electric-600', colors.electric[600]);
    document.documentElement.style.setProperty('--color-electric-500', colors.electric[500]);
    document.documentElement.style.setProperty('--color-gold-500', colors.gold[500]);
    document.documentElement.style.setProperty('--color-gold-400', colors.gold[400]);
  }, []);

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
