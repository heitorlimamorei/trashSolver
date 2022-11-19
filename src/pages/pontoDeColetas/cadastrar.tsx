import { useRouter } from "next/router";
import { useState } from "react";
import FeedBackButton from "../../components/template/FeedBackButton";
import Layout from "../../components/template/Layout";
import LongTextInput from "../../components/template/LongTextInput";
import ProfileInput from "../../components/template/ProfileInput";
import SelecionarTipo from "../../components/template/SelecionarTipo";
import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";

export default function Cadastrar() {
  let tiposLista =  ["Computador", "Motores eletricos", "Transistor", "Impressora", "Controle", "Placa de silicio"]
  const router = useRouter();
  const {setPontoDeColeta, pontoDeColeta} = useAppData()
  const [nome, setNome] = useState<string>(null);
  const iRandom = Math.floor(Math.random() * tiposLista.length)
  const [tipo, setTipo] = useState(tiposLista[iRandom])
  const [photoUrl, setPhotoUrl] = useState<string>(null)
  const [descricao, setDescricao] = useState<string>(null)
  const {usuario} = useAuth();
  async function cadastrarItem(){
    try{
        let item = {
            nome: nome,
            tipo: tipo,
            photourl:photoUrl,
            descricao: descricao,
            quempostou: usuario.email
        }
        setPontoDeColeta(await pontoDeColeta.postar(item))
        router.push('editar')
    } catch(err){
        console.log('Erro econtrado:'+ err)
        router.push('editar')
    }  
  }
  return (
    <div className={``}>
      <Layout titulo="Cadastre seu item" subtitulo="" >
        <label className="m-2 dark:text-gray-200">Nome do item</label>
        <ProfileInput
          placeholder="Digite o nome do item"
          valor={nome}
          setValor={setNome}
          tipo={"string"}
        />
        <label className="m-2 dark:text-gray-200">Tipo</label>
        <SelecionarTipo 
        tipo={tipo}
        setTipo={setTipo}
        tiposLista={tiposLista}
        />
        <label className="m-2 dark:text-gray-200">Link da imagem</label>
        <ProfileInput
          placeholder="Digite a url da imagem do item"
          valor={photoUrl}
          setValor={setPhotoUrl}
          tipo={"string"}
        />
        <label className="m-2 dark:text-gray-200">Descrição</label>
        <LongTextInput 
        valor={descricao}
        setValor={setDescricao}
        />
        <FeedBackButton 
        text="Cadastrar item"
        onClick={async () => await cadastrarItem()}
        className={`w-full py-4 mt-2 text-white`}
        />
      </Layout>
    </div>
  );
}
