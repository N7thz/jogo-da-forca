'use client'

import { useErros } from "@/context/errosContext"

export const BonecoPalito = () => {

    const { erros } = useErros()

    return (

        <div>
            {
                erros === 1 &&

                <div className="w-[50px] h-[50px] border-4 border-black rounded-full absolute top-[55px] -right-6" />

                || erros === 2 &&

                <>
                    <div className="w-[50px] h-[50px] border-4 border-black rounded-full absolute top-[55px] -right-6" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[110px] -right-1" />
                </>

                || erros === 3 &&

                <>
                    <div className="w-[50px] h-[50px] border-4 border-black rounded-full absolute top-[55px] -right-6" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[110px] -right-1" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[35px] transform: rotate-45" />
                </>

                || erros === 4 &&

                <>
                    <div className="w-[50px] h-[50px] border-4 border-black rounded-full absolute top-[55px] -right-6" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[110px] -right-1" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[35px] transform: rotate-45" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[-45px] transform: -rotate-45" />
                </>

                || erros === 5 &&

                <>
                    <div className="w-[50px] h-[50px] border-4 border-black rounded-full absolute top-[55px] -right-6" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[110px] -right-1" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[35px] transform: rotate-45" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[-45px] transform: -rotate-45" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[200px] right-[18px] transform: rotate-12" />
                </>

                || erros === 6 &&

                <>
                    <div className="w-[50px] h-[50px] border-4 border-black rounded-full absolute top-[55px] -right-6" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[110px] -right-1" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[35px] transform: rotate-45" />
                    <div className="w-[12px] h-[80px] border-4 bg-black absolute top-[110px] right-[-45px] transform: -rotate-45" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[200px] right-[18px] transform: rotate-12" />
                    <div className="w-[12px] h-[100px] border-4 bg-black absolute top-[200px] right-[-28px] transform: -rotate-12" />
                </>
            }
        </div>
    )
}