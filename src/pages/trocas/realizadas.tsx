import { useEffect, useState } from "react";
import Layout from "../../components/template/Layout";
import axios from "axios";
import ProfileInput from "../../components/template/ProfileInput";
import FeedBackButton from "../../components/template/FeedBackButton";
import useAppData from "../../data/hook/useAppData";
import RealizarTrocaModel from  "../../model/RealizarTroca";
import TrocaRealizada from "../../components/template/TrocaRealizada";
export default function Realizadas() {

  const {realizarTroca} = useAppData()
  const [pesquisaId, setPesquisaId] = useState<string>(realizarTroca.id)
  const [trocaRealizada, setTrocaRealizada] = useState(realizarTroca)
  async function pesquisarTroca(): Promise<void> {
    const resp = await axios.get(`http://localhost:3000/api/realizarTroca/${pesquisaId}`)
    setTrocaRealizada(await RealizarTrocaModel.fromRealizarTrocaAPI((await resp.data)))
  }
  
  return (
    <div className={``}>
      <Layout
        titulo="Cadastre sua troca"
        subtitulo="Aqui você pode criar um post de troca!"
      >
        <div className={`flex flex-col w-full h-full mt-1`}>
        <div className={`flex w-full`}>
            <ProfileInput 
            valor={pesquisaId}
            setValor={setPesquisaId}
            tipo="string"
            placeholder="Digite o codigo da troca"
            className="w-4/6 m-2"
            />
            <FeedBackButton
            text="Pesquisar"
            onClick={async () => await pesquisarTroca()}
            className="w-2/6 m-2"
            />
        </div>
       <TrocaRealizada trocaRealizada={trocaRealizada} />
        </div>
      </Layout>
    </div>
  );
}
