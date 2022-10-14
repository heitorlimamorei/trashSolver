import { useState } from 'react'
import FeedBackButton from '../components/template/FeedBackButton'
import Layout from '../components/template/Layout'
import ProfileInput from '../components/template/ProfileInput'
import baseUrl from '../model/Variaveis'
import axios from 'axios'

export default function Ajustes() {
  const [name, setName] = useState(null)
  const [salarioBruto, SetSalarioBruto] = useState(null)
  const [planoDeSaude, setPlanoDeSaude] = useState(null)
  const [profile, setProfile] = useState({
    name: "Heitor Lima Moreira",
    salarioBruto: 12000
  })
  async function sendProfile() {
    const resp =  await axios.post(`${baseUrl}/api/user`, {
      dependentesPlanoValor: 320,
	    dependentesNumero: 1,
      name: name,
	    ipva: 3200,
	    ipvaParcelamento: 1,
	    iptuParcelamento: 12,
	    iptu: 1200,
	    salarioBruto: salarioBruto,
	    planoDeSaudeValor: planoDeSaude
    })
    console.log(resp.data)
  }
  return (
    <div className={``}>
      <Layout titulo="Noticações" subtitulo="Aqui você vai gerenciar suas notificações">
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <ProfileInput 
          valor={name ?? ""}
          setValor={setName}
          tipo={"string"}
          className="w-full"
          placeholder='Digite seu nome aqui'
          />
          <ProfileInput 
          valor={salarioBruto ?? ""}
          setValor={SetSalarioBruto}
          tipo={"number"}
          className="w-full"
          placeholder='Digite seu salario bruto aqui'
          />
          <ProfileInput 
          valor={planoDeSaude ?? ""}
          setValor={setPlanoDeSaude}
          tipo={"number"}
          className="w-full"
          placeholder='Plano de saúde'
          />
          <FeedBackButton 
          text="Enviar"
          onClick={async () => await sendProfile()}
          />
        </div>
        <div className='flex flex-col w-full'>
          <span>Nome : {profile.name}</span>
          <span>Salario bruto : {profile.salarioBruto}</span>
        </div>
      </Layout>
    </div>
  )
}
