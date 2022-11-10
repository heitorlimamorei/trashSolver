import ConteudoHome from './ConteudoHome'
import ImagemHome from './ImagemHome'

export default function LinkHome(props) {
    return(
        <div className="flex flex-col  md:w-[40%] md:h-[100%] w-full bg-indigo-50 dark:bg-gray-600 dark:text-white rounded-xl">
            <ImagemHome/>
            <ConteudoHome titulo={props.titulo} Descricao={props.descricao}/>
        </div> 
    )
}