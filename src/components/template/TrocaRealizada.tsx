import RealizarTrocaModel from  "../../model/RealizarTroca";
import ProfileInput from "./ProfileInput";
import { useEffect, useState } from "react";

interface TrocaRealizadaComponentProps {
    trocaRealizada:RealizarTrocaModel;
    className?:string;
}
interface PontoDeColetaData {
    id: string;
    nome:string;
    criador: string;
    localizacao: string;
    tiposDeItens: string[];
}
export default function TrocaRealizada(props:TrocaRealizadaComponentProps){
    const pontoDeColetaMock = {
        id: "",
        nome:"",
        criador: "",
        localizacao: "",
        tiposDeItens: []
    };
    const {trocaRealizada} = props
    const [pontoDeColetaData, setPontoDeColetaData] = useState<PontoDeColetaData>(pontoDeColetaMock)
    async function getPontoDeColetaData() {
       let resp = await trocaRealizada.getPontosDeColetaData();
       setPontoDeColetaData(resp)
    }
    useEffect(() => {
        getPontoDeColetaData()
    }, [trocaRealizada])
    return trocaRealizada.id ? (
        <div className={`flex flex-col w-full  m-2 bg-gray-100 p-2 rounded-md`}>
            <div>
                <h2 className={`text-[30px]`}>{trocaRealizada.nome}</h2>
            </div>
            <div className="my-2">
               <p>
                <span className="font-bold text-[20px]">Descrição: </span>{trocaRealizada.descricao}
               </p>
            </div>
            <div className="my-2">
                <h2 className={`mb-2`}><span className="font-bold  text-[20px]">Criador - </span>{trocaRealizada.quemcriou}</h2>
                <h2><span className="font-bold  text-[20px]">Interessado - </span>{trocaRealizada.interessado}</h2>
            </div>
            <div className={`flex flex-col`}>
               <h2 className='font-bold text-[20px]'>Localização</h2>
               <div>
                {pontoDeColetaData.nome}
                <span>{" "}</span>
                {pontoDeColetaData.localizacao}
               </div>
            </div>
        </div>
    ) : (
        <div className={`flex flex-col  h-full w-full items-center justify-center`}>
            <h1 className="font-bold">Não encontramos nada!</h1>
            <h2>Digite um novo id e tente novamente.</h2>
        </div>
    )
}