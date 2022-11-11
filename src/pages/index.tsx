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
      <Layout titulo= "Home" subtitulo="Bem-Vindo ao TrashSolver" >
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-row gap-3 content-between md:h-[25%] h-[30%]">
            <Banner className="h-[100%] w-[98%] text-center" text="Veja os pontos de Coleta!"/>
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap h-[36%] content-between gap-3 mt-2">
            <LinkHome titulo='Ponto de Coleta' descricao='aqui você irá encontrar pontos de coleta próximos de você' src='../../../Ponto.png'url={`${baseUrl}/pontoDeColetas`}/>
            <LinkHome titulo='Trocas' src='../../../trade-icon.png' classNameI='w-1/2 justify-self-center self-center' url={`${baseUrl}/trocas`}/>
            <LinkHome titulo='Perigos do lixo eletrônico' src='../../../Perigo.png' classNameI='w-1/2 justify-self-center self-center' url={`${baseUrl}/Paralelos/1A`}/>
            <LinkHome titulo='Jogo de tabuleiro!' src='../../../Tabuleiro.jpg'classNameI='p-0 justify-self-center'url={`${baseUrl}/Paralelos/1B`}/>
          </div>
        </div>        
      </Layout>
    </div>
  )
}
