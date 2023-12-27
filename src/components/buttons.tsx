'use client'

import { useRouter } from "next/navigation"

export const Buttons = () => {

    const router = useRouter()

    const handleJogar = () => {

        alert('Jogar')
    }

    const handleOpcoes = () => {

        router.push('/opcoes')
    }

    return (

        <div className="flex flex-col gap-4">
            <button
                onClick={handleJogar}
                className="button"
            >
                Jogar
            </button>

            <button
                onClick={handleOpcoes}
                className="button"
            >
                Opções
            </button>
        </div>
    )
}