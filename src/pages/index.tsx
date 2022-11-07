import Layout from '../components/template/Layout'
import {ponto} from '../components/icons/Icones'
import { useRouter } from 'next/router'
import Banner from '../components/template/ItemLista/BannerTrocas'
import LinkHome from '../components/template/Home/LinkHome'

export default function Home() {
  const router = useRouter()
  return (
    <div className={``}>
      <Layout titulo= "Home" subtitulo="Bem-Vindo ao TrashSolver" >
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-row gap-4 content-between h-[20%]">
            <Banner className="h-[90%] w-[49%]" text="Veja os pontos de Coleta!"/>
            <Banner className="h-[90%] w-[49%]" text="Foda-se!!!"/>
          </div>
          <div className="flex flex-row content-between gap-5 mt-2">
            <LinkHome/>
            <LinkHome/>
          </div>
          <div className="flex flex-row content-between gap-5 mt-10">
            <LinkHome/>
            <LinkHome/>
          </div>
        </div>        
      </Layout>
    </div>
  )
}
