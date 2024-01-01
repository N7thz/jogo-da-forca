'use client'

import axios from "axios"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"

interface PalavraContextProps {

    palavra: Palavra
    setPalavra: Dispatch<SetStateAction<Palavra>>
}

interface Palavra {

    id: number
    palavra: string
    dica: string
}

const PalavraContext = createContext({} as PalavraContextProps)

export function PalavraProvider({ children }: { children: ReactNode }) {

    const [palavra, setPalavra] = useState<Palavra>({

        id: 51,
        palavra: 'iogurte',
        dica: 'comida feita a partir de leite'
    })

    const getPalavraAleatoria = async () => {

        axios.get('http://localhost:3000/api/palavraAleatoria')
            .then(response => setPalavra(response.data))
    }

    useEffect(() => {

        getPalavraAleatoria()
    }, [])

    return (

        <PalavraContext.Provider value={{ palavra, setPalavra }}>
            {children}
        </PalavraContext.Provider>
    )
}

export const usePalavra = () => useContext(PalavraContext)