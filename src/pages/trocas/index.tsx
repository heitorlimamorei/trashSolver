import Layout from '../../components/template/Layout'
<<<<<<< HEAD
import ItemLista from '../../components/template/ItemLista'
=======
import axios from 'axios'
import { useEffect, useState } from 'react'
import TrocaItemModel from '../../model/TrocaItemModel'
>>>>>>> 48e4c9cc1aa771a257bfe7dc9556756409fd1af5

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
<<<<<<< HEAD
      <Layout titulo="Lista de itens" subtitulo="">
        <section className = "">
          <ItemLista/>
        </section>
=======
      <Layout titulo="Trocas" subtitulo="Aqui você vai ver as trocas disponiveis">
        <div>
          <ul>
          {trocas.map((troca:TrocaItemModel) => <li>
            {troca.nome} || {troca.descricao} || {troca.trocaRealizadaId}
          </li>)}
          </ul>
            
        </div>
>>>>>>> 48e4c9cc1aa771a257bfe7dc9556756409fd1af5
      </Layout>
    </div>
  )
}
