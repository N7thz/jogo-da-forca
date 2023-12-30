import { useBackground } from "@/context/backgroundContext"

export const BackgroundOptions = () => {

    const { setBackground } = useBackground()

    const colors: string[] = [

        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
        "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
        "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
        "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
        "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
    ]

    return (

        <div className="flex gap-2 p-3 items-center">

            {
                colors.map(color =>

                    <div
                        onClick={() => setBackground(color)}
                        className={`${color} w-16 h-16 rounded-full hover:scale-110 duration-300 cursor-pointer`}
                    />
                )
            }
        </div>
    )
}
