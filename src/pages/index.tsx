import LayoutHome from '../components/template/Home/LayoutHome'
import BotaoHome from '../components/template/Home/BotaoHome'
import {ponto} from '../components/icons/Icones'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className={``}>
      <LayoutHome titulo= "Home" subtitulo="Bem-Vindo ao TrashSolver" >
        <div className="w-full h-full flex flex-row">
          <BotaoHome onClick={()=> {
            router.push('/pontoDeColetas')
          }} Nome='Ponto de Coleta' icon={ponto}/>
        </div>        
      </LayoutHome>
    </div>
  )
}
