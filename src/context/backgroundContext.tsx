'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface BackgroundContextProps {

    background: string | null
    setBackground: Dispatch<SetStateAction<string | null>>
}

const BackgroundContext = createContext({} as BackgroundContextProps)

export function BackgroundProvider({ children }: { children: ReactNode }) {
    
    localStorage.setItem('background', 'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800')
    const backgroundStorage = localStorage.getItem('background')

    const [background, setBackground] = useState<string | null>(backgroundStorage)
    
    return (

        <BackgroundContext.Provider value={{ background, setBackground }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export const useBackground = () => useContext(BackgroundContext)