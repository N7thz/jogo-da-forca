'use client'

import { Dispatch, SetStateAction } from "react"

interface ButtonsOptionsProps {
    
    setIsModalOpen: Dispatch<SetStateAction<boolean>>

}


export const ButtonsOptions: React.FC<ButtonsOptionsProps> = ({ setIsModalOpen }) => {

    return (

        <div>

            <button onClick={() => setIsModalOpen(true)}>
                Trocar Background
            </button>

            <button>
                Sair
            </button>
        </div>
    )
}