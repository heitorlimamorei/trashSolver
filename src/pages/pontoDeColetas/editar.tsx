import { useEffect, useState } from "react";
import Layout from "../../components/template/Layout";
import useAuth from "../../data/hook/useAuth";
import PontoDeColetaCompostaModel from "../../model/PontoDeColeta/Composta";

export default function EditarPontoDeColeta() {
  const [pontoDeColeta, setPontoDeColeta] = useState(
    PontoDeColetaCompostaModel.emBraco()
  );
  const {usuario} = useAuth()
  const idMock = "HGTEvRTcBaQcwc78iLN0";
  async function loader() {
    setPontoDeColeta(await PontoDeColetaCompostaModel.getById(idMock));
  }
  useEffect(() => {
    loader();
  }, []);
  function RenderTest() {
    return pontoDeColeta.listaDeItens.filter((item) => !item.coletado).map((item) => {
      return (
        <li key={item.id}>
          <h1>{item.nome}</h1>
          <p>{item.descricao}</p>
          <h3>{item.quempostou}</h3>
          <button onClick={async () => setPontoDeColeta(await pontoDeColeta.deletar(item.id))}>Deletar</button>
          <button onClick={async () => setPontoDeColeta(await pontoDeColeta.coletar(item.id, usuario.email))} className="ml-1">Coletar</button>
        </li>
      );
    });
  }
  return (
    <div className={``}>
      <Layout titulo="Edite" subtitulo="">
        <div>
          <h1>{pontoDeColeta.nome}</h1>
          <h2>Localização: {pontoDeColeta.localizacao}</h2>
        </div>
        <div>{RenderTest()}</div>
      </Layout>
    </div>
  );
}
