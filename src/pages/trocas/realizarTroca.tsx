import { useEffect, useState } from 'react'
import FeedBackButton from '../../components/template/FeedBackButton'
import TipoItem from '../../components/template/TipoITem'
import Layout from '../../components/template/Layout'
import ListaTipos from '../../components/template/ListaDeTipos'
import LongTextInput from '../../components/template/LongTextInput'
import ProfileInput from '../../components/template/ProfileInput'
import SelecionarTipo from '../../components/template/SelecionarTipo'
import TiposPersonalizadosModel from '../../model/TipoPersonaLizadosModel'
import axios from 'axios'
import useAuth from '../../data/hook/useAuth'
import { useRouter } from 'next/router'

export default function RealizarTroca() {
  const router = useRouter()
  const [emailDoCriador, SetEmailDoCriador] = useState<string>(null)
  const {usuario} = useAuth()
  const [emailInteressado, SetEmailInteressado] = useState<string>(usuario?.email)
  const [idDeTroca, setIdDeTroca] =  useState<string>(null)
  const [itemDeInteresse, setItemDeInteresse] = useState<string>("_")
  const [pontoDeColetaId, setPontoDeColetaId] = useState<string>("_")
  const [pontoDeColeta, setPontoDeColeta] = useState<string>("_")
  const [pontosDeColeta, setPontosDeColeta] = useState<string[]>(null)
  const [listadeinteresses, setListadeinteresses] = useState<string[]>(["Digite um código"])
  async function cadastrar(){
    try{
        const cadastro = await axios.post('http://localhost:3000/api/realizarTroca' ,{
        emailCriador: emailDoCriador,
        emailInteressado: emailInteressado,
        idDaTroca:idDeTroca,
        intemDeInteresse:itemDeInteresse,
        pontoDeColetaId: pontoDeColetaId
    })
    } catch(err){
    console.log(err)
    }
  }
  async function seTerPontoDeColeta(pontoDeColeta){
    const data = await getPontosDeColeta()
    setPontoDeColeta(pontoDeColeta)
    setPontoDeColetaId((data.find((ponto)=>ponto.nome===pontoDeColeta)).id)
    console.log(pontoDeColetaId)
  }
  async function getListaDeInteresse(){
    try{
        const resp = await axios.get(`/api/trocas/${idDeTroca}`)
        return await {...resp.data}
    } catch(err) {
        console.log(err)
    }
  }
  async function getPontosDeColeta(){
    try{
        const resp = await axios.get(`/api/pontodecoleta`)
        return await resp.data
    } catch(err) {
        console.log(err)
    }
  }
  async function loader(): Promise<void>{
    const data = await getListaDeInteresse()
    setListadeinteresses(data.listadeinteresses)
    SetEmailDoCriador(data.quemcriou)
  }
  async function PontoDeColetaLoader(): Promise<void>{
    const data = await getPontosDeColeta()
    let nomes = data.map((ponto) => {
        return ponto.nome
    })
    setPontosDeColeta(nomes)
  }
  useEffect(() => {
    loader()
  }, [idDeTroca]);
  useEffect(() => {
    PontoDeColetaLoader()
  }, []);
  
  return (
    <div className={``}>
      <Layout titulo="Cadastre sua troca" subtitulo="Aqui você pode criar um post de troca!">
        <div className={`flex flex-col justify-center items-center w-full h-full
        `}>
            <div className={`
                flex flex-col  items-center  h-full w-2/3  mt-1
                `}>
                <ProfileInput
                valor={emailDoCriador}
                setValor={SetEmailDoCriador}
                tipo="string"
                placeholder='Email do criador do post'
                className='w-full mt-1'
                />
                 <ProfileInput
                valor={emailInteressado}
                setValor={SetEmailInteressado}
                tipo="string"
                placeholder='Email do interessado no item da troca'
                className='w-full mt-1'
                />
                <ProfileInput
                valor={idDeTroca}
                setValor={setIdDeTroca}
                tipo="string"
                placeholder='Id da troca em questão'
                className='w-full mt-1'
                />
                <SelecionarTipo 
                tipo={itemDeInteresse}
                setTipo={setItemDeInteresse}
                tiposLista={listadeinteresses}
                className='w-full mt-1'
                />
                <SelecionarTipo 
                tipo={pontoDeColeta}
                setTipo={seTerPontoDeColeta}
                tiposLista={pontosDeColeta}
                className='w-full mt-1'
                />
                <FeedBackButton text='Trocar' className='text-white' onClick={ async () => await cadastrar()}/>
            </div>    
        </div>
      </Layout>
    </div>
  )
}
