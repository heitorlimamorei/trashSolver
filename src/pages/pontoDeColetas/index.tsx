import Layout from "../../components/template/Layout";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PontoDeColetaBaseModel from "../../model/PontoDeColeta/Base";
import PontoDeColetaCompostaModel from "../../model/PontoDeColeta/Composta";
import SelecionarPonto from "../../components/template/PontoDeColetas/SelecionarPonto";
import useAppData from "../../data/hook/useAppData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
async function getPontos(
  url: string = "/api/pontodecoleta"
): Promise<PontoDeColetaBaseModel[]> {
  const resp = await axios.get(url);
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
const PontosDeColeta = React.memo(() => {
  const [pontosDeColeta, setPontosDeColeta] = useState<
    PontoDeColetaBaseModel[]
  >([PontoDeColetaBaseModel.EmBranco()]);
  const { pontoDeColeta, setPontoDeColeta } = useAppData();
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/pontodecoleta", getPontos);
  const loadPontos = useCallback(async (): Promise<void> => {
    const resp = data ?? [PontoDeColetaBaseModel.EmBranco()];
    setPontosDeColeta(resp);
  }, [data]);
  useEffect(() => {
    if (!isLoading) {
      loadPontos();
    }
  }, [data]);
  async function irEditar(id:string) {
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
  const renderPontos = useCallback(() => {
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
  }, [pontosDeColeta]);
  return (
    <div className={``}>
      <Layout titulo="Lista de pontos de coleta" subtitulo="">
        <ToastContainer />
        <ul>{renderPontos()}</ul>
      </Layout>
    </div>
  );
});
export default PontosDeColeta;
