import Link from "next/link"
import baseUrl from '../../../model/Variaveis'
export default function Banner(props) {


    return (
        <div className={`flex justify-center items-center text-[40px] font-bold w-full py-10 bg-gradient-to-l rounded-xl from-green-300 to-green-600 text-white ${props.className}`}>
            <Link href={`${props.url}`}>{props.text}</Link>
        </div>
    )
}