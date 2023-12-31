'use client'

import { useBackground } from "@/context/backgroundContext"
import { ButtonsLogin } from "../../../components/buttonsLogin"

export default function Login() {

    const { background } = useBackground()

    console.log(background)
    
    return (

        <div
            className={`flex items-center justify-center min-h-screen ${background}`}
        >
            <div
                className="flex flex-col items-center justify-around bg-zinc-200 min-h-[400px] w-3/12 rounded-lg"
            >
                <h1 className="text-5xl">Forca</h1>
                <ButtonsLogin />
            </div>
        </div>
    )
}
