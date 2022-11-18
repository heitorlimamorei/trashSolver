import Cabecalho from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import Conteudo from './Conteudo'
import useAppData from "../../data/hook/useAppData";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";
interface TemplateProps {
    titulo: string;
    subtitulo: string;
    children?: any;
    className?:string
    subTema?:string;
    feedBack?: boolean;
    addChild?: any;
}

export default function Template(props:TemplateProps){
    const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
            <div className={` ${tema} ${props.subTema} flex h-screen w-screen `}>
            <MenuLateral />
            <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 ${props.className}`}>
            <Cabecalho feedBack={props?.feedBack} titulo={props.titulo}  subtitulo={props.subtitulo}>
                {props.addChild}
            </Cabecalho>
            <Conteudo>
                {props.children}
            </Conteudo>
            </div>
        </div>
        </ForcarAutenticacao>
         )
}