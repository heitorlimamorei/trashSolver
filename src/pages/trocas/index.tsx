import Layout from '../../components/template/Layout'
import ItemLista from '../../components/template/ItemLista'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TrocaItemModel from '../../model/TrocaItemModel'

export default function Trocas() {
  const [trocas, setTrocas] = useState<TrocaItemModel[]>([])
  async function getTrocas(): Promise<TrocaItemModel[]> {
    const resp = await axios.get('/api/trocas')
    return await resp.data.map(troca => TrocaItemModel.fromJSON(troca))
  }
  async function loadTrocas():Promise<void>{
    const resp = await getTrocas()
    setTrocas(resp) 
  }
  useEffect( ()=>{
    loadTrocas()
  }, [])
  return (
    <div className={``}>
      <Layout titulo="Trocas" subtitulo="Aqui você vai ver as trocas disponiveis">
        <div>
          <ul>
          {trocas.map((troca:TrocaItemModel) => <li key={troca.id}>
            {troca.nome} || {troca.descricao} || {troca.trocaRealizadaId}
          </li>)}
          </ul>
            
        </div>
      </Layout>
    </div>
  )
}
