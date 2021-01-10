import React, { createContext, useState } from "react";

export const AppTransitionContext = createContext();

export function AppTransitionProvider({ children }) {
  const [preset, setPreset] = useState("cubeToTop");
  const [enterAnimation, setEnterAnimation] = useState("");
  const [exitAnimation, setExitAnimation] = useState("");

  return (
    <AppTransitionContext.Provider
      value={{
        preset,
        enterAnimation,
        exitAnimation,
        setPreset,
        setEnterAnimation,
        setExitAnimation
      }}
    >
      {children}
    </AppTransitionContext.Provider>
  );
}
