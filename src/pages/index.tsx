import Layout from '../components/template/Layout';
import { lista } from '../components/icons/Icones';
import Botao from '../components/template/BotaoHome';
import imagem from "../../../public/images/animated_recycling_symbol.gif"
import baseUrl from '../model/Variaveis';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={``}>
      <Layout titulo = 'Página Inicial' subtitulo = ''>
        <motion.div initial={{x:-10000}} animate={{x:20}} transition={{duration:1.2}} className={`flex flex-col h-full w-100 items-center`}>
          <img src='animated_recycling_symbol.gif' className="absolute w-56 left=0 " alt="" />
          <div className="flex flex-row">
            <Botao icone={lista} texto={'Pontos de Coleta'}
            url={baseUrl} src={''}/>
            <Botao icone={lista} texto={'Pontos de Coleta'}
            url={baseUrl} src={''}/>
          </div>
          <div className="flex flex-row">
            <Botao icone={lista} texto={'Pontos de Coleta'}
            url={baseUrl} src={''}/>
            <Botao icone={lista} texto={'Pontos de Coleta'}
            url={baseUrl} src={''}/>
          </div>
        </motion.div>
      </Layout>

    </div>

    

  )
}
