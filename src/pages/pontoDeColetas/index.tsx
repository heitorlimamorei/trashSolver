import Layout from "../../components/template/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import PontoDeColetaBaseModel from "../../model/PontoDeColeta/Base";
export default function PontosDeColeta() {
  const [pontosDeColeta, setPontosDeColeta] = useState<PontoDeColetaBaseModel[]>(null)
  async function getPontos(): Promise<PontoDeColetaBaseModel[]> {
    const resp = await axios.get("/api/pontodecoleta");
    return await resp.data.map(
      (ponto) =>
        new PontoDeColetaBaseModel(
          ponto.id,
          ponto.nome,
          ponto.criador,
          ponto.localizacao,
          ponto.tiposDeItens
        )
    );
  }
  async function loadPontos():Promise<void>{
    const resp = await getPontos();
    setPontosDeColeta(resp)
  }
  useEffect(()=>{
    loadPontos()
  },[])
  function renderPontos(){
    return pontosDeColeta.map(ponto => {
        return(
        <li key={ponto.id} className={`mb-1`}>
        <div>
            <h1>{ponto.nome}</h1>
        </div>
        <div>
            <span>{ponto.localizacao}</span>
            -
            <span>{ponto.criador}</span>
        </div>
        </li>
        )
    })
  }
  return (
    <div className={``}>
      <Layout titulo="Lista de pontos de coleta" subtitulo="">
        <ul>
            {renderPontos()}
        </ul>
      </Layout>
    </div>
  );
}
