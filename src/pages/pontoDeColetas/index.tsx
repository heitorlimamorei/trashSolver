import Layout from "../../components/template/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import PontoDeColetaBaseModel from "../../model/PontoDeColeta/Base";
import PontoDeColetaCompostaModel from "../../model/PontoDeColeta/Composta";
import SelecionarPonto from "../../components/template/PontoDeColetas/SelecionarPonto";
import useAppData from "../../data/hook/useAppData";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
export default function PontosDeColeta() {
  const [pontosDeColeta, setPontosDeColeta] = useState<
    PontoDeColetaBaseModel[]
  >([PontoDeColetaBaseModel.EmBranco()]);
  const { pontoDeColeta, setPontoDeColeta } = useAppData();
  const router = useRouter();
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
  async function loadPontos(): Promise<void> {
    const resp = await getPontos();
    setPontosDeColeta(resp);
  }
  useEffect(() => {
    loadPontos();
  }, []);
  async function irEditar(id) {
    try {
      setPontoDeColeta(await PontoDeColetaCompostaModel.getById(id));
      router.push("pontoDeColetas/editar");
    } catch (err) {
      toast.error(err.message, {
        theme: "colored",
        draggable: true,
      });
    }
  }
  function renderPontos() {
    return pontosDeColeta.map((ponto) => {
      return (
        <SelecionarPonto
          nome={ponto.nome}
          key={ponto.id}
          localizacao={ponto.localizacao}
          onClick={() => irEditar(ponto.id)}
        />
      );
    });
  }
  return (
    <div className={``}>
      <Layout titulo="Lista de pontos de coleta" subtitulo="">
        <ToastContainer />
        <ul>{renderPontos()}</ul>
      </Layout>
    </div>
  );
}
