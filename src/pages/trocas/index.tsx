import Layout from '../../components/template/Layout'
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
          <ul className="dark:text-gray-200">
          {trocas.map((troca:TrocaItemModel) => <li key = {troca.id} >
            <ItemLista Nome = {troca.nome} Descricao = {troca.descricao}/>
          </li>)}
          
          </ul>
            
        </div>
      </Layout>
    </div>
  )
}
