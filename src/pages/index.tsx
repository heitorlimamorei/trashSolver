import Layout from '../components/template/Layout'
import {menu} from '../components/icons/Icones'


export default function Home() {
  return (
    <div className={``}>
      <Layout titulo = '' subtitulo = ''>
        <nav className=' bg-green-600 flex justify-center align-center'>

          <div className='w-100 h-100 flex  justify-self-center self-center '> {/* circle */}
            <button className=" bg-green-800 text-gray-300 w-20 h-20 rounded-full flex items-center justify-center self-center -36 ">
              {menu}
            </button>
          </div>

        </nav>
      </Layout>

    </div>

    

  )
}
