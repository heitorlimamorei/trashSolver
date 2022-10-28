import Link from "next/link"
import baseUrl from '../../../model/Variaveis'
export default function Banner() {


    return (
        <div className="flex justify-center items-center text-[40px] font-bold w-full h-64 bg-gradient-to-l rounded-xl from-green-300 to-green-600">
            <Link href={`${baseUrl}/trocas/cadastrar`}>Cadaste Seu Item!</Link>
        </div>
    )
}