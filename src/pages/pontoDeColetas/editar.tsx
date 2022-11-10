import Link from "next/link";
import { useEffect, useState } from "react";
import NotFund from "../../components/template/ErrorMsg";
import Layout from "../../components/template/Layout";
import Item from "../../components/template/PontoDeColetas/Item";
import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";

export default function EditarPontoDeColeta() {
  const {pontoDeColeta, setPontoDeColeta} = useAppData();
  const {usuario} = useAuth()
  function RenderTest() {
    return pontoDeColeta.listaDeItens.filter((item) => !item.coletado).map((item) => {
      return (
        <Item
        key={item.id}
        nome={item.nome}
        quempostou={item.quempostou}
        descricao={item.descricao}
        deletar={async () => setPontoDeColeta(await pontoDeColeta.deletar(item.id))}
        coletar={async () => setPontoDeColeta(await pontoDeColeta.coletar(item.id, usuario.email))}
        />
      );
    });
  }
  return pontoDeColeta.id ? (
    <div className={``}>
      <Layout titulo="" subtitulo="">
        <div className="dark:text-white flex flex-col">
          <div>
            <h1 className="text-[30px] font-bold mt-2">{pontoDeColeta.nome}</h1>
            <h2 className=''><span className="font-bold">Localização:</span> {pontoDeColeta.localizacao}</h2>
          </div>

          <Link href={`cadastrar`}>
          <button className='bg-green-500 p-3 m-1 rounded-xl md:w-2/12 w-5/12 self-end'>Cadastrar novo item</button>
          </Link>

          <div>{RenderTest()}</div>
        </div>
      </Layout>
    </div>
  ) : (
    <div className={``}>
      <Layout titulo="Error Event!" subtitulo="">
        <div>
          <NotFund 
          msg="Ponto de coleta não encontrado!"
          statusErro="404"
          routes={
            {
              routeOne:"/pontoDeColetas",
              routeTwo: '/'
            }
          }
          routeMsg={{
            msgOne:"Voltar a lista de pontos de coleta!",
            msgTwo: 'Voltar a Home'
          }}
          />
        </div>
      </Layout>
    </div>
    
  )
}
