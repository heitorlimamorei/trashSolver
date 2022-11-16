import Layout from "../../components/template/Layout";
import Historico from "../../components/template/PontoDeColetas/historico";
import { useEffect, useState } from "react";
import axios from "axios";
import { trocaEvent, HistoryEvent } from "../../model/PontoDeColeta/evento";
import useAppData from "../../data/hook/useAppData";
import HistoryEventComponent from "../../components/template/HistoryEventComponent";
import {check, upload, usersGroupIcon} from '../../components/icons/Icones'
interface evento {
  id: string;
  pontoId: string;
  itemId?: string;
  trocaId?: string;
  tipo: string;
  realizadoPor: string;
  data?: any;
  descricao: string;
  getFormetedDate?: () => {
    day?: any;
    month?: any;
    year?: any;
  };
}
export default function PontoDeColetaHistorico() {
  const { pontoDeColeta } = useAppData();
  const [history, setHistory] = useState<evento[]>([
    trocaEvent.trocaEventEmBranco(),
  ]);
  async function getHistory() {
    const resp = await axios.get(
      `/api/pontodecoleta/${pontoDeColeta.id}/historico`
    );
    return await resp.data.map((evento) => {
      if (evento.tipo === "troca") {
        return new trocaEvent(
          evento.id,
          evento.pontoId,
          evento.trocaId,
          evento.tipo,
          evento.realizadoPor,
          evento.data,
          evento.descricao
        );
      } else {
        return new HistoryEvent(
          evento.id,
          evento.pontoId,
          evento.itemId,
          evento.tipo,
          evento.realizadoPor,
          evento.data,
          evento.descricao
        );
      }
    });
  }
  async function loadHistory() {
    const resp = await getHistory();
    setHistory(resp);
    console.log(resp);
  }
  useEffect(() => {
    loadHistory();
  }, []);
  function renderHistory() {
    return history.map((evento: evento) => {
      if (evento.tipo === "troca") {
        return (
          <HistoryEventComponent
            key={evento.id}
            descricao={evento.descricao}
            tipo={evento.tipo}
            formatedDate={{
              day: evento.getFormetedDate().day,
              month: evento.getFormetedDate().month,
              year: evento.getFormetedDate().year,
            }}
            className="bg-indigo-50 dark:bg-gray-600 dark:text-white w-[98%] h-[20%] rounded-xl shadow-xl p-3"
            icone={usersGroupIcon(7)}
          >
          
          </HistoryEventComponent>
        );
      } else if (evento.tipo === "post") {
        return (
          <HistoryEventComponent
            key={evento.id}
            descricao={evento.descricao}
            tipo={evento.tipo}
            formatedDate={{
              day: evento.getFormetedDate().day,
              month: evento.getFormetedDate().month,
              year: evento.getFormetedDate().year,
            }}
            className=" bg-indigo-50 dark:bg-gray-600 dark:text-white w-[98%] h-[20%] rounded-xl shadow-xl p-3"
            icone={upload}
          >
            
          </HistoryEventComponent>
        );
      } else if (evento.tipo === "coleta") {
        return (
          <HistoryEventComponent
            key={evento.id}
            descricao={evento.descricao}
            tipo={evento.tipo}
            formatedDate={{
              day: evento.getFormetedDate().day,
              month: evento.getFormetedDate().month,
              year: evento.getFormetedDate().year,
            }}
            className="bg-indigo-50 dark:bg-gray-600 dark:text-white w-[98%] h-[20%] rounded-xl shadow-xl p-3"
            icone={check}
          >
            
          </HistoryEventComponent>
        );
      }
    });
  }
  return (
    <div className={``}>
      <Layout titulo="Historico" subtitulo="">
        <div>
          <ul>{renderHistory()}</ul>
        </div>
      </Layout>
    </div>
  );
}
