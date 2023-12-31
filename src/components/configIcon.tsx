import { Cog } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const ConfigIcon = () => {

    const router = useRouter()

    return (

        <Cog
            width={36}
            height={36}
            className={`absolute top-2 right-2 cursor-pointer`}
            onClick={() => router.push('/opcoes')}
        />
    )
}