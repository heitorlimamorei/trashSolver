import Layout from '../../components/template/Layout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TrocaItemModel from '../../model/TrocaItemModel'

export default function Trocas() {
  const [trocas, setTrocas] = useState<TrocaItemModel[]>([])
  async function getTrocas() {
    const resp = await axios.get('/api/trocas')
    return await resp.data.map(troca => TrocaItemModel.fromJSON(troca))
  }
  async function loadTrocas(){
    const resp = await getTrocas()
    setTrocas(resp) 
  }
  useEffect(()=>{
    loadTrocas()
  }, [])
  return (
    <div className={``}>
      <Layout titulo="Trocas" subtitulo="Aqui você vai ver as trocas disponiveis">
        <div>
          <ul>
          {trocas.map((troca:TrocaItemModel) => <li>
            {troca.nome} || {troca.descricao}
          </li>)}
          </ul>
            
        </div>
      </Layout>
    </div>
  )
}
