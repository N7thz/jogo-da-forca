'use client'

import { FormEvent, useState } from "react"
import { BonecoPalito } from "@/components/bonecoPalito"
import { useBackground } from "@/context/backgroundContext"
import { Lightbulb } from 'lucide-react'
import { ConfigIcon } from "@/components/configIcon"
import { useErros } from "@/context/errosContext"
import { Modal } from "@/components/modal"
import { usePalavra } from "@/context/palavraContext"

export default function Forca() {

    const { background } = useBackground()
    const { erros, setErros } = useErros()
    const { palavra: { palavra, dica } } = usePalavra()

    const [newLetra, setNewLetra] = useState<string>('')
    const [historico, setHistorico] = useState<string[]>([])
    const [isDica, setIsDica] = useState<boolean>(false)
    const [win, setWin] = useState<boolean>(false)
    const [lose, setLose] = useState<boolean>(false)
    const [letrasCertas, setLetrasCertas] = useState<string[]>([])
    const letrasUnicas = Array.from(new Set(palavra.toLowerCase().split('')))
    const letras: string[] = palavra.toLowerCase().split('')

    const verificarLetra = (e: FormEvent) => {

        e.preventDefault()

        if (historico.includes(newLetra)) {

            alert('Você ja digitou essa letra')
        } else {

            if (letrasUnicas.includes(newLetra)) {

                setLetrasCertas(oldValue => [...oldValue, newLetra])

                if (letrasUnicas.length - 1 === letrasCertas.length) {

                    setWin(true)
                }
            }

            if (!letras.includes(newLetra)) {

                if (erros <= 5) {

                    setErros(erros + 1)
                } else {

                    setLose(true)
                }
            }

            setHistorico(oldValue => [...oldValue, newLetra])
        }

        setNewLetra('')
    }

    return (

        <div className={`flex items-center justify-around min-h-screen ${background}`}>

            <ConfigIcon />

            <div
                className="flex flex-col items-center justify-between bg-zinc-200 min-h-[600px] w-1/3 rounded-lg pt-16"
            >

                <div
                    className="w-[250px] h-[380px] border-l-4 border-t-4 border-black rounded-lg flex flex-col relative"
                >
                    <div className="w-[246px] h-[50px] border-r-4 border-black" />

                    <BonecoPalito />
                </div>

                <div className=" w-full h-full justify-center text-5xl p-1 flex gap-4 flex-wrap lowercase m-2">

                    {
                        letras.map(letra => {

                            if (historico.includes(letra)) {

                                return (

                                    <span
                                        key={letra}
                                        className="border-b-4 border-zinc-700 p-1"
                                    >
                                        {letra}
                                    </span>
                                )
                            } else {

                                return (

                                    <span
                                        key={letra}
                                        className="border-b-4 border-zinc-700 p-1 text-zinc-200"
                                    >
                                        {letra}
                                    </span>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col items-center justify-between bg-zinc-200 min-h-[600px] w-1/3 rounded-lg relative">

                {
                    erros > 4 &&
                    <Lightbulb
                        onClick={() => setIsDica(true)}
                        width={36}
                        height={36}
                        color="white"
                        className={`${background} absolute top-2 right-2 p-1 rounded-full cursor-pointer hover:scale-110 duration-500`}
                    />
                }

                <h1 className="text-3xl w-full text-left ml-8 text-zinc-800 mt-4">Erros: {erros}</h1>

                <div className={`w-11/12 p-1 rounded-lg ${background}`}>
                    <h1 className="text-2xl text-left text-zinc-200 p-2">
                        Dica:
                    </h1>
                    {
                        isDica &&
                        <h1 className="text-3xl italic text-zinc-200">{dica}</h1>
                    }
                </div>

                <div className={`w-11/12 p-1 rounded-lg text-zinc-200 ${background}`}>
                    <h1 className="text-2xl text-left p-2">
                        Letras:
                    </h1>
                    <div className="flex p-2">
                        {historico.map(letra =>
                            <h1
                                key={letra}
                                className="text-4xl after:content-['-']"
                            >
                                {letra}
                            </h1>
                        )}
                    </div>
                </div>

                <div className="min-h-full w-2/4 flex flex-col">

                    <form
                        className="w-full min-h-full flex flex-col gap-2 m-4"
                        onSubmit={verificarLetra}
                    >
                        <input
                            type="text"
                            value={newLetra}
                            maxLength={1}
                            required
                            onChange={e => setNewLetra(e.target.value.toLowerCase())}
                        />
                        <button
                            className={`${background} button`}
                            type="submit"
                        >
                            Confirmar
                        </button>
                    </form>
                </div>
            </div>

            {
                lose &&
                <Modal>
                    <h1 className="text-3xl text-red-700">Voce perdeu.</h1>
                    <span className="text-center">A palavra era "{palavra.toLowerCase()}"</span>
                </Modal>
            }

            {
                win &&
                <Modal>
                    <h1 className="text-3xl text-green-700">Voce venceu.</h1>
                </Modal>
            }
        </div>
    )
}