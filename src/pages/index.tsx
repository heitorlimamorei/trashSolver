import LayoutHome from '../components/template/LayoutHome'
import {motion} from 'framer-motion'
import ImagemHome from '../components/template/Home/ImagemHome'
import BotaoPontoDeColeta from '../components/template/Home/BotaoPontoDeColeta'
import TituloHome from '../components/template/Home/TituloHome'


export default function Home() {
  return (
    <div className={``}>
      <LayoutHome titulo= "" subtitulo="" >
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col">
            <TituloHome/>

            <BotaoPontoDeColeta/>

          </div>

          <ImagemHome/>
        
          
          
        </div>
      </LayoutHome>
    </div>
  )
}
