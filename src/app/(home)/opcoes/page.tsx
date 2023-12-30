'use client'

import { useState } from "react";
import { BackgroundOptions } from "@/components/backgroundOptions";
import { ButtonsOptions } from "@/components/buttonsOptions";
import { X } from 'lucide-react'
import { useBackground } from "@/context/backgroundContext";

export default function Opcoes() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const { background } = useBackground()

    return (

        <div
            className={`flex items-center justify-center min-h-screen relative', ${background}`}
        >
            <div
                className="flex flex-col items-center justify-around bg-zinc-200 min-h-[400px] w-3/12 rounded-lg"
            >
                <h1 className="text-5xl">Opções</h1>

                <ButtonsOptions setIsModalOpen={setIsModalOpen} />
            </div>

            {
                isModalOpen &&
                <div
                    className="bg-zinc-200 absolute w-3/6 h-3/6 rounded-lg border-2 border-blue-600 flex flex-col items-center justify-around p-2"
                >
                    <h1 className="text-5xl">Escolha um background</h1>

                    <BackgroundOptions />
                    <X
                        onClick={() => setIsModalOpen(false)}
                        color="white"
                        width={36}
                        height={36}
                        className={`${background} absolute top-1 right-1 z-1 rounded-md p-1 cursor-pointer`}
                    />
                </div>
            }
        </div>
    )
}
