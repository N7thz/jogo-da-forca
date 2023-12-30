'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface BackgroundContextProps {

    background: string
    setBackground: Dispatch<SetStateAction<string>>
}

export const BackgroundContext = createContext({} as BackgroundContextProps)

export function BackgroundProvider({ children }: { children: ReactNode }) {

    const [background, setBackground] = useState<string>('bg-gradient-to-r from-cyan-500 to-blue-500')

    return (

        <BackgroundContext.Provider value={{ background, setBackground }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export const useBackground = () => useContext(BackgroundContext)