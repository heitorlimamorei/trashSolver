import LayoutHome from '../components/template/LayoutHome'
import BotaoHome from '../components/template/Home/BotaoHome'
import {ponto} from '../components/icons/Icones'

export default function Home() {
  return (
    <div className={``}>
      <LayoutHome titulo= "Home" subtitulo="Bem-Vindo ao TrashSolver" >
        <div className="w-full h-full flex flex-row">
          <BotaoHome Nome='Ponto de Coleta' icon={ponto}/>
        </div>        
      </LayoutHome>
    </div>
  )
}
