import Layout from '../components/template/Layout'
import {ponto} from '../components/icons/Icones'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className={``}>
      <Layout titulo= "Home" subtitulo="Bem-Vindo ao TrashSolver" >
        <div className="w-full h-full flex flex-row">
        </div>        
      </Layout>
    </div>
  )
}
