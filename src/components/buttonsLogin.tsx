'use client'

import { useBackground } from "@/context/backgroundContext"
import { useRouter } from "next/navigation"

export const ButtonsLogin = () => {

    const router = useRouter()
    const { background } = useBackground()
    
    const handleJogar = () => {

        router.push('/forca')
    }

    const handleOpcoes = () => {

        router.push('/opcoes')
    }

    return (

        <div className="flex flex-col gap-4">
            <button
                onClick={handleJogar}
                className={`button ${background}`}
            >
                Jogar
            </button>

            <button
                onClick={handleOpcoes}
                className={`button ${background}`}
            >
                Opções
            </button>
        </div>
    )
}