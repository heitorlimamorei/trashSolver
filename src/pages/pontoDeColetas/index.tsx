import Layout from "../../components/template/Layout";
import axios from "axios";
import PontoDeColetaBaseModel from "../../model/PontoDeColeta/Base";
import PontoDeColetaCompostaModel from "../../model/PontoDeColeta/Composta";
import SelecionarPonto from "../../components/template/PontoDeColetas/SelecionarPonto";
import useAppData from "../../data/hook/useAppData";
import { useRouter } from "next/router";
export async function getStaticProps() {
  const resp = await (
    await axios.get("http://localhost:3000/api/pontodecoleta")
  ).data;
  return {
    props: {
      pontosDeColeta: resp,
    },
  };
}
export default function PontosDeColeta({ pontosDeColeta }) {
  const { setPontoDeColeta } = useAppData();
  const router = useRouter();
  function getPontos(): PontoDeColetaBaseModel[] {
    const resp = pontosDeColeta;
    return resp.map(
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
  async function irEditar(id) {
    setPontoDeColeta(await PontoDeColetaCompostaModel.getById(id));
    router.push("pontoDeColetas/editar");
  }
  function renderPontos() {
    return getPontos().map((ponto) => {
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
        <ul>{renderPontos()}</ul>
      </Layout>
    </div>
  );
}
