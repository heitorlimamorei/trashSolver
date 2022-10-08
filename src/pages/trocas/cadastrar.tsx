import { useState } from 'react'
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

export default function CadastrarTroca() {
  const router = useRouter()
  const [nome, setNome] =  useState<string>(null)
  const {usuario} = useAuth()
  const [photoUrl, SetPhotoUrl] =  useState<string>(null)
  const [tipo, setTipo] =  useState<string>(null)
  const tiposMock =  ["Computador", "Motores eletricos", "Transistor", "Impressora", "Controle"]
  const [descricao, setDescricao] = useState<string>(null)
  const [novoInteresse, setNovoInteresse] = useState<string>(null)
  const [listadeinteresses, setListadeinteresses] = useState(TiposPersonalizadosModel.criarArrayPadrao())
  async function cadastrar(){
    try{
        const cadastro = await axios.post('/api/trocas',{
        trocaRealizadaId: "_",
        nome: nome,
        descricao:descricao,
        photourl: photoUrl,
        quemcriou: usuario?.email,
        tipo:tipo,
        trocado: false,
        listadeinteresses:listadeinteresses.toFirebase()
    })
    router.push('/')
    } catch(err){
    console.log(err)
    }
  }  
  function renderTiposDeGastos(){
    return listadeinteresses.arrayDeTipos.map((tipo) =>{
      return <TipoItem texto={tipo.nome} key={tipo.id} id={tipo.id} deleteMe={() => setListadeinteresses(listadeinteresses.deleteTipo(tipo.id))} />
    })
  }
  return (
    <div className={``}>
      <Layout titulo="Cadastre sua troca" subtitulo="Aqui você pode criar um post de troca!">
        <div className={`flex flex-col justify-center items-center w-full h-full
        `}>
            <div className={`
                flex flex-col  items-center  h-full w-2/3  mt-1
                `}>
                <ProfileInput
                valor={nome}
                setValor={setNome}
                tipo="string"
                placeholder='Digite o nome'
                className='w-full mt-1'
                />
                <ProfileInput
                valor={photoUrl}
                setValor={SetPhotoUrl}
                tipo="string"
                placeholder='Digite a URL da imagem'
                className='w-full mt-1'
                />
                <LongTextInput 
                valor={descricao}
                setValor={setDescricao}
                placeholder='Digite a descrição'
                className='w-full mt-1'
                />
                <SelecionarTipo 
                tipo={tipo ?? ''}
                setTipo={setTipo}
                tiposLista={tiposMock}
                className='w-full mt-1'
                />
                <div className="flex w-full">
                <ProfileInput
              tipo="string"
              valor={novoInteresse}
              setValor={setNovoInteresse}
              placeholder="Cadastrar novo interesse"
              className={"w-2/3 m-0 mt-2 mb-2"}
            />
            <button 
            className="flex w-1/3 m-1 text-sm py-0 items-center justify-center  px-2 bg-green-500 text-white rounded-full"
            onClick={() => {
                setListadeinteresses(listadeinteresses.setNewTipo(novoInteresse))
                setNovoInteresse(null)
            }}
            >
              Salvar
            </button>
                </div>
                <ListaTipos>
                    {renderTiposDeGastos()}
                </ListaTipos>
                <FeedBackButton text='Cadastrar' className='text-white' onClick={ async () => await cadastrar()}/>
            </div>    
        </div>
      </Layout>
    </div>
  )
}
