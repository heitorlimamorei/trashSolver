import { useEffect, useState } from "react";
import FeedBackButton from "../../components/template/FeedBackButton";
import Layout from "../../components/template/Layout";
import ProfileInput from "../../components/template/ProfileInput";
import SelecionarTipo from "../../components/template/SelecionarTipo";
import axios from "axios";
import useAuth from "../../data/hook/useAuth";
import { useRouter } from "next/router";

export default function RealizarTroca() {
  const router = useRouter();
  const [emailDoCriador, SetEmailDoCriador] = useState<string>(null);
  const { usuario } = useAuth();
  const [emailInteressado, SetEmailInteressado] = useState<string>(
    usuario?.email
  );
  const [idDeTroca, setIdDeTroca] = useState<string>(null);
  const [itemDeInteresse, setItemDeInteresse] = useState<string>(null);
  const [pontoDeColetaId, setPontoDeColetaId] = useState<string>(null);
  const [pontoDeColeta, setPontoDeColeta] = useState<string>(
    "Ponto de coleta Marista Dom Silverio"
  );
  const [pontosDeColeta, setPontosDeColeta] = useState<string[]>(null);
  const [listadeinteresses, setListadeinteresses] = useState<string[]>([
    "Digite um código",
  ]);
  async function cadastrar() {
    try {
      console.log({
        emailCriador: emailDoCriador,
        emailInteressado: emailInteressado,
        idDaTroca: idDeTroca,
        intemDeInteresse: itemDeInteresse,
        pontoDeColetaId: pontoDeColetaId,
      });
      const cadastro = await axios.post(
        "https://g5bjhf-3000.preview.csb.app/api/realizarTroca",
        {
          emailCriador: emailDoCriador,
          emailInteressado: emailInteressado,
          idDaTroca: idDeTroca,
          intemDeInteresse: itemDeInteresse,
          pontoDeColetaId: pontoDeColetaId,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  async function getPontoId() {
    try {
      const data = await getPontosDeColeta();
      return await data.find((ponto) => ponto.nome === pontoDeColeta).id;
    } catch (err) {
      console.log(`ERRO:400 Ponto de coleta invalido: ${err.message}`);
    }
  }
  async function SetterPontoDeColetaId() {
    const id = await getPontoId();
    console.log("Ponto de coleta:" + id);
    setPontoDeColetaId(id);
  }
  async function getListaDeInteresse() {
    try {
      const resp = await axios.get(`/api/trocas/${idDeTroca}`);
      return await { ...resp.data };
    } catch (err) {
      console.log(err);
    }
  }
  async function getPontosDeColeta() {
    try {
      const resp = await axios.get(`/api/pontodecoleta`);
      return await resp.data;
    } catch (err) {
      console.log(err);
    }
  }
  async function loader(): Promise<void> {
    try {
      const data = await getListaDeInteresse();
      setListadeinteresses(await data.listadeinteresses);
      setItemDeInteresse(await data.listadeinteresses[0]);
      console.log("Item de interesse:" + (await data.listadeinteresses[0]));
      SetEmailDoCriador(await data.quemcriou);
    } catch (err) {
      console.log(`ERRO:400: Id da troca é invalido: ${err.message}`);
    }
  }
  async function PontoDeColetaLoader(): Promise<void> {
    const data = await getPontosDeColeta();
    let nomes = data.map((ponto) => {
      return ponto.nome;
    });
    setPontosDeColeta(nomes);
  }
  useEffect(() => {
    loader();
  }, [idDeTroca]);
  useEffect(() => {
    PontoDeColetaLoader();
  }, []);
  useEffect(() => {
    SetterPontoDeColetaId();
  }, [pontoDeColeta]);

  return (
    <div className={``}>
      <Layout
        titulo="Cadastre sua troca"
        subtitulo="Aqui você pode criar um post de troca!"
      >
        <div
          className={`flex flex-col justify-center items-center w-full h-full
        `}
        >
          <div
            className={`
                flex flex-col  items-center  h-full w-2/3  mt-1
                `}
          >
            <ProfileInput
              valor={emailDoCriador}
              setValor={SetEmailDoCriador}
              tipo="string"
              placeholder="Email do criador do post"
              className="w-full mt-1"
            />
            <ProfileInput
              valor={emailInteressado}
              setValor={SetEmailInteressado}
              tipo="string"
              placeholder="Email do interessado no item da troca"
              className="w-full mt-1"
            />
            <ProfileInput
              valor={idDeTroca}
              setValor={setIdDeTroca}
              tipo="string"
              placeholder="Id da troca em questão"
              className="w-full mt-1"
            />
            <SelecionarTipo
              tipo={itemDeInteresse}
              setTipo={setItemDeInteresse}
              tiposLista={listadeinteresses}
              className="w-full mt-1"
            />
            <SelecionarTipo
              tipo={pontoDeColeta}
              setTipo={setPontoDeColeta}
              tiposLista={pontosDeColeta}
              className="w-full mt-1"
            />
            <FeedBackButton
              text="Trocar"
              className="text-white"
              onClick={async () => await cadastrar()}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
