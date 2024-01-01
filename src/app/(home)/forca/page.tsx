'use client'

import { FormEvent, useEffect, useState } from "react"
import { BonecoPalito } from "@/components/bonecoPalito"
import { useBackground } from "@/context/backgroundContext"
import { Lightbulb } from 'lucide-react'
import { ConfigIcon } from "@/components/configIcon"
import { useErros } from "@/context/errosContext"
import { Modal } from "@/components/modal"
import data from '@/app/api/data.json'
import { log } from "console"


export default function Forca() {

    const { background } = useBackground()
    const { erros, setErros } = useErros()

    const numeroAleatorio = Math.round(Math.random() * (50 - 1))

    useEffect(() => {

        const palavra = data[numeroAleatorio].palavra
    },[])
    
    const palavra = 'abacaxi'
    const [newLetra, setNewLetra] = useState<string>('')
    const [historico, setHistorico] = useState<string[]>([])
    const [win, setWin] = useState<boolean>(false)
    const [lose, setLose] = useState<boolean>(false)
    const [letrasCertas, setLetrasCertas] = useState<string[]>([])
    const letrasUnicas = Array.from(new Set(palavra.split('')))
    const letras: string[] = palavra.split('')

    const verificarLetra = (e: FormEvent) => {

        e.preventDefault()

        console.log(letrasUnicas)

        if (historico.includes(newLetra)) {

            alert('Você ja digitou essa letra')
        } else {

            if (letrasUnicas.includes(newLetra)) {

                setLetrasCertas(oldValue => [...oldValue, newLetra])
                console.log(letrasCertas)
                console.log(letrasUnicas)

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

        console.log(historico)
        console.log(erros)
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
                                        className="border-b-4 border-zinc-700 p-1 "
                                    >
                                        {letra}
                                    </span>
                                )
                            } else {

                                return (

                                    <span
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

                <Lightbulb
                    width={36}
                    height={36}
                    color="white"
                    className={`${background} absolute top-2 right-2 p-1 rounded-full`}
                />

                <h1 className="text-3xl w-full text-left ml-8 text-white mt-4">Erros: {erros}</h1>

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
                            onChange={e => setNewLetra(e.target.value)}
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
                    Voce perdeu
                </Modal>
            }

            {
                win &&
                <Modal>
                    Voce Venceu
                </Modal>
            }
        </div>
    )
}