import Cabecalho from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import Conteudo from './Conteudo'
import useAppData from "../../data/hook/useAppData";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";
interface TemplateProps {
    titulo: string;
    subtitulo: string;
    children?: any;
}

export default function Template(props:TemplateProps){
    const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
            <div className={` ${tema} flex h-screen w-screen `}>
            <MenuLateral />
            <div className={`flex flex-col w-full p-7 bg-green-500 dark:bg-green-800 `}>
            <Cabecalho titulo={props.titulo}  subtitulo={props.subtitulo}/>
            <Conteudo>
                {props.children}
            </Conteudo>
            </div>
        </div>
        </ForcarAutenticacao>
         )
}