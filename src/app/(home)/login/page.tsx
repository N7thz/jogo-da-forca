import { Buttons } from "../../../components/buttons"

export default function Login() {

    return (

        <div
            className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
        >
            <div
                className="flex flex-col items-center justify-around bg-zinc-200 min-h-[400px] w-3/12 rounded-lg"
            >
                <h1 className="text-5xl">Forca</h1>
                <Buttons />
            </div>
        </div>
    )
}
