import React from 'react'

const ThemeContext = React.createContext(
    "LIFE"
);

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;