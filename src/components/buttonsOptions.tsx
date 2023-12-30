'use client'

import { Dispatch, SetStateAction } from "react"
import { useRouter } from 'next/navigation'
import { useBackground } from "@/context/backgroundContext"

export interface ButtonsOptionsProps {

    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export const ButtonsOptions: React.FC<ButtonsOptionsProps> = ({ setIsModalOpen }) => {

    const router = useRouter()
    const { background } = useBackground()

    return (

        <div className="flex flex-col gap-4">

            <button
                onClick={() => setIsModalOpen(true)}
                className={`button ${background}`}
            >
                Trocar Background
            </button>

            <button
                onClick={() => router.push('/')}
                className={`button ${background}`}
            >
                Sair
            </button>
        </div>
    )
}