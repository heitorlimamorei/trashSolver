import ConteudoHome from './ConteudoHome'
import ImagemHome from './ImagemHome'

export default function LinkHome(props) {
    return(
        <div className="flex flex-col w-[49%] h-[100%]  bg-indigo-50 dark:bg-gray-600 dark:text-white rounded-xl">
            <ImagemHome/>
            <ConteudoHome titulo={"Ponto de coleta"} Descricao={`Lorem ipsum dolor sit amet. Ea dignissimos quia et repellat galisum quo deserunt dolor ex incidunt sunt aut incidunt modi aut officia quae. Id omnis suscipit vel fugiat reprehende...`}/>
        </div> 
    )
}