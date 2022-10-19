import Link from "next/link";
import imagem from "../../../public/83692.jpg" 
export default function Botao(props) {
    return(
        <Link href={props.url}>
            <button className={'w-6/12 h-fit rounded-xl bg-green-500 dark:bg-green-800 dark:</link>text-gray-300 flex flex-row justify-center items-center m-2'}>
                <div className="flex flex-col justify-center">
                    <div className={'m-10'}>{props.icone}</div>
                    <div className={'text-3xl ml-4'}>
                        {props.texto}
                    </div>
                </div>
                <div className={'h-full w-full'}>
                    <img className="h-full rounded-xl" src='83692.jpg'  alt = "Imagem do item"/>
                </div>
            </button>
        </Link>
    )
}
