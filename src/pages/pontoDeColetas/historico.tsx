import Layout from '../../components/template/Layout'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {trocaEvent, HistoryEvent} from '../../model/PontoDeColeta/evento'
import useAppData from '../../data/hook/useAppData'
interface evento {
    pontoId:string;
    itemId?:string;
    trocaId?:string;
    tipo:string;
    realizadoPor:string;
    data?: any;
    descricao: string;
    getFormetedDate?: () => {
      day?: any;
      month?: any;
      year?: any;
    };
}
export default function PontoDeColetaHistorico() {   
  const {pontoDeColeta} = useAppData()
  const [history, setHistory] = useState<evento[]>([trocaEvent.trocaEventEmBranco()])
  async function getHistory(){
    const resp = await axios.get(`/api/pontodecoleta/${pontoDeColeta.id}/historico`)
    return await resp.data.map((evento)=>{
        if(evento.tipo==='troca'){
          return new trocaEvent(
              evento.id,
              evento.pontoId,
              evento.trocaId,
              evento.tipo,
              evento.realizadoPor,
              evento.data,
              evento.descricao
          )
      } else {
        return  new HistoryEvent(
          evento.id,
          evento.pontoId,
          evento.itemId,
          evento.tipo,
          evento.realizadoPor,
          evento.data,
          evento.descricao
      )
      }
    })
  }
  async function loadHistory(){
    const resp = await getHistory();
    setHistory(resp)
    console.log(resp)
  }
  useEffect(() => {
    loadHistory()
  },[])
  function renderHistory(){
    return history.map((evento)=>{
        return <li>
          <h1>{evento.descricao}</h1>
          {evento.getFormetedDate().day}/{evento.getFormetedDate().month}/{evento.getFormetedDate().year}
        </li>
    })
  }
  return (
    <div className={``}>
      <Layout titulo="Historico" subtitulo="">
        <div>
            <ul>
                {renderHistory()}
            </ul>
        </div>
      </Layout>
    </div>
  )
}
