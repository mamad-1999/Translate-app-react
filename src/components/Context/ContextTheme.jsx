import React, { createContext, useReducer, useEffect } from "react";

const initialTheme = {
  themeMode: "light",
  isDark: false
};

const reduce = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      if (state.themeMode === "light") {
        state.themeMode = "dark";
        localStorage.setItem("theme", "dark");
        state.isDark = true;
      } else {
        state.themeMode = "light";
        localStorage.setItem("theme", "light");
        state.isDark = false;
      }
      return {
        ...state
      };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

function ContextTheme({ children }) {
  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal === "dark") {
      dispathTheme({ type: "DARK_MODE" });
    }
  }, []);

  const [stateTheme, dispathTheme] = useReducer(reduce, initialTheme);
  return (
    <ThemeContext.Provider value={{ stateTheme, dispathTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ContextTheme;
