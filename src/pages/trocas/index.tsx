import Layout from "../../components/template/Layout";
import axios from "axios";
import baseUrl from "../../model/Variaveis";
import RealizarTrocaModel from "../../model/RealizarTroca"; 
import ItemLista from "../../components/template/ItemLista";
import { useEffect, useState } from "react";
import TrocaItemModel from "../../model/TrocaItemModel";
import useAppData from "../../data/hook/useAppData";
import { useRouter } from "next/router";
import Banner from "../../components/template/ItemLista/BannerTrocas";
import useSWR from "swr";
async function getTrocas(url:string = "/api/trocas"): Promise<TrocaItemModel[]> {
  const resp = await axios.get(url);
  return await resp.data.map((troca) => TrocaItemModel.fromJSON(troca));
}
export default function Trocas() {
  const [trocas, setTrocas] = useState<TrocaItemModel[]>([]);
  const router = useRouter()
  const {setRealizarTroca} = useAppData();
  const {data, isLoading} = useSWR("/api/trocas", getTrocas, {
    refreshInterval: 100000,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
  })
  async function loadTrocas(): Promise<void> {
    const resp = data ?? trocas
    setTrocas(resp);
  }
  useEffect(() => {
    if(!isLoading){
      loadTrocas();
    }
  }, [data]);
  async function seTRealizarTroca(id, nome, descricao, quemcriou) {
    setRealizarTroca(new RealizarTrocaModel(id, nome, descricao, quemcriou, "", "", ""));
    router.push('/trocas/realizarTroca')
  }

  return (
    <div className={``}>
      <Layout
        titulo="Trocas"
        subtitulo="Aqui você vai ver as trocas disponiveis"
      >
        <div>
          <Banner url={`${baseUrl}/trocas/cadastrar`} className="text-center" text="Cadastre seu Item Aqui!"/>
          <ul className="dark:text-gray-200 flex flex-col w-full md:flex-row md:flex-wrap">
            {trocas.filter(troca => !troca.trocado).map((troca: TrocaItemModel) => (
              <li key={troca.id} className="flex flex-col justify-center items-center w-full md:w-1/3">
                <ItemLista
                  id={troca.id}
                  Nome={troca.nome}
                  Descricao={troca.descricao}
                  trocar={() =>
                    seTRealizarTroca(
                      troca.id,
                      troca.nome,
                      troca.descricao,
                      troca.quemcriou
                    )
                  }
                  listaInteresses={troca.listadeinteresses}
                  urlImg={troca.Photourl}
                />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
}
