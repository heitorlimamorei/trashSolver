import Layout from '../components/template/Layout'
import {ponto} from '../components/icons/Icones'
import { useRouter } from 'next/router'
import Banner from '../components/template/ItemLista/BannerTrocas'
import LinkHome from '../components/template/Home/LinkHome'
import baseUrl from '../model/Variaveis'

export default function Home() {
  const router = useRouter()
  return (
    <div className={``}>
      <Layout titulo= "Home" subtitulo="Bem-Vindo ao TrashSolver"  className=''>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-row gap-3 content-between md:h-[25%] h-[30%]">
            <Banner className="h-[100%] w-[98%] text-center" text="Veja os pontos de Coleta!" url={`${baseUrl}/pontoDeColetas`}/>
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap h-[50%] content-between gap-2 mt-2">
            <LinkHome titulo='Ponto de Coleta' descricao='aqui você irá encontrar pontos de coleta próximos de você' src='../../../shop.png'url={`${baseUrl}/pontoDeColetas`} classNameI=' w-2/3 p-5 justify-self-center self-center' />
            <LinkHome titulo='Trocas' src='../../../trade.png' classNameI=' w-1/2 justify-self-center self-center' url={`${baseUrl}/trocas`}/>
            <LinkHome titulo='Perigos do lixo eletrônico' src='../../../poison.png' classNameI='h-[60%] mb-6 mt-2 w-1/2 justify-self-center self-center' url={`${baseUrl}/Paralelos/1A`}/>
            <LinkHome titulo='Jogo de tabuleiro!' src='../../../board-game.png'classNameI=' w-2/3 p-9 justify-self-center self-center' url={`${baseUrl}/Paralelos/1B`}/>
          </div>
        </div>        
      </Layout>
    </div>
  )
}
