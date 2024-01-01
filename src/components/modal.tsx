'use client'

import { useBackground } from "@/context/backgroundContext"
import { useRouter } from "next/navigation"

interface ModalProps {

    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children }) => {

    const { background } = useBackground()

    return (

        <div className="absolute min-h-screen w-full bg-zinc-800/70 flex justify-center items-center z-10">

            <div className="w-[300px] h-[300px] bg-zinc-200 flex flex-col justify-center items-center rounded-lg">

                {children}

                <div className="flex flex-col gap-2">

                    <button
                        onClick={() => window.location.reload()}
                        className={`button ${background} m-2`}
                    >
                        Jogar novamente
                    </button>
                </div>
            </div>
        </div>
    )
}