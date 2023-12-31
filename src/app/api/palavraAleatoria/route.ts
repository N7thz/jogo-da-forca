import data from '../data.json'

export async function GET() {

    const numeroAleatorio = Math.round(Math.random() * (50 - 1))

    console.log(numeroAleatorio)

    console.log(data[numeroAleatorio])
    
    return Response.json(data[numeroAleatorio]) 
}