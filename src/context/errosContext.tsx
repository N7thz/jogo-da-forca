'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface ErrosProps {

    erros: number
    setErros: Dispatch<SetStateAction<number>>
}

const ErrosContext = createContext({} as ErrosProps)

export function ErrosProvider({ children } : { children: ReactNode }) {

    const [erros, setErros] = useState<number>(0)

    return (

        <ErrosContext.Provider value={{erros, setErros}}>
            {children}
        </ErrosContext.Provider>
    )
}

export const useErros = () => useContext(ErrosContext)