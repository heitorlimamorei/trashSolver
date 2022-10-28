import Layout from "../../components/template/Layout";
import axios from "axios";
import RealizarTrocaModel from "../../model/RealizarTroca";

import ItemLista from "../../components/template/ItemLista";
import { useEffect, useState } from "react";
import TrocaItemModel from "../../model/TrocaItemModel";
import useAppData from "../../data/hook/useAppData";
import { useRouter } from "next/router";
import Banner from "../../components/template/ItemLista/BannerTrocas";

export default function Trocas() {
  const [trocas, setTrocas] = useState<TrocaItemModel[]>([]);
  const router = useRouter()
  const {setRealizarTroca} = useAppData();
  async function getTrocas(): Promise<TrocaItemModel[]> {
    const resp = await axios.get("/api/trocas");
    return await resp.data.map((troca) => TrocaItemModel.fromJSON(troca));
  }
  async function loadTrocas(): Promise<void> {
    const resp = await getTrocas();
    setTrocas(resp);
  }
  useEffect(() => {
    loadTrocas();
  }, []);
  async function seTRealizarTroca(id, nome, descricao, quemcriou) {
    setRealizarTroca(new RealizarTrocaModel(id, nome, descricao, quemcriou, "", ""));
    router.push('/trocas/realizarTroca')
  }
  return (
    <div className={``}>
      <Layout
        titulo="Trocas"
        subtitulo="Aqui você vai ver as trocas disponiveis"
      >
        <div>
          <Banner/>
          <ul className="dark:text-gray-200">
            {trocas.filter(troca => !troca.trocado).map((troca: TrocaItemModel) => (
              <li key={troca.id} className="flex flex-col justify-center items-center">
                <ItemLista
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
                />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
}
