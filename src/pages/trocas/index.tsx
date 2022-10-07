import Layout from '../../components/template/Layout'
import ItemLista from '../../components/template/ItemLista'

export default function Trocas() {
  return (
    <div className={``}>
      <Layout titulo="Lista de itens" subtitulo="">
        <section className = "">
          <ItemLista/>
        </section>
      </Layout>
    </div>
  )
}
