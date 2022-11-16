import ConteudoHome from './ConteudoHome'
import ImagemHome from './ImagemHome'
import Link from 'next/link'
export default function LinkHome(props) {
    return(
        <Link href={props.url}>
        <div className="flex flex-col md:text[8px] md:w-[30%] md:h-[100%] w-full bg-indigo-50 dark:bg-gray-600 dark:text-white rounded-xl p-2">
            <ImagemHome src={props.src} className={props.classNameI}/>
            <ConteudoHome titulo={props.titulo} Descricao={props.descricao}/>
        </div> 
        </Link>
    )
}