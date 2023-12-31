'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface BackgroundContextProps {

    background: string | null
    setBackground: Dispatch<SetStateAction<string | null>>
}

const BackgroundContext = createContext({} as BackgroundContextProps)

export function BackgroundProvider({ children }: { children: ReactNode }) {
    
    localStorage.setItem('background', 'bg-gradient-to-r from-cyan-500 to-blue-500')
    const backgroundStorage = localStorage.getItem('background')

    const [background, setBackground] = useState<string | null>(backgroundStorage)
    
    return (

        <BackgroundContext.Provider value={{ background, setBackground }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export const useBackground = () => useContext(BackgroundContext)