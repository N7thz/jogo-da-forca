'use client'

import { BonecoPalito } from "@/components/bonecoPalito"
import { useBackground } from "@/context/backgroundContext"

export default function Forca() {

    const { background } = useBackground()

    const palavra: string = "abacaxi"
    const letras: string[] = palavra.split('')

    console.log(letras)

    return (

        <div className={`flex items-center justify-around min-h-screen ${background}`}>

            <div className="flex flex-col items-center justify-between bg-zinc-200 min-h-[600px] w-1/3 rounded-lg">

                <h1>Dica</h1>

                <div className="w-[250px] h-[380px] border-l-4 border-t-4 border-black rounded-lg flex flex-col relative">
                    <div className="w-[246px] h-[50px] border-r-4 border-black" />
                    
                    <BonecoPalito />
                </div>

                <div className=" w-full h-full justify-center text-5xl p-1 flex gap-4 flex-wrap lowercase m-2">
                    {
                        letras.map(letra =>
                            <span
                                className="border-b-4 border-zinc-700 p-1"
                            >
                                {letra}
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col items-center justify-between bg-red-900 min-h-[600px] w-1/3 rounded-lg">

                <div className="bg-red-300 min-h-full w-2/4 flex">
                    <div className="bg-black h-full w-full relative inset-1" />
                </div>

                <div className="bg-green-300 min-h-full w-2/4 flex flex-col">

                    <input type="text" />
                    <button>ok</button>
                </div>
            </div>
        </div>
    )
}