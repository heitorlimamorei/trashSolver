import Link from "next/link";
import { useEffect, useState } from "react";
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
        nome={item.nome}
        quempostou={item.quempostou}
        descricao={item.descricao}
        deletar={async () => setPontoDeColeta(await pontoDeColeta.deletar(item.id))}
        coletar={async () => setPontoDeColeta(await pontoDeColeta.coletar(item.id, usuario.email))}
        />
      );
    });
  }
  return (
    <div className={``}>
      <Layout titulo="Edite" subtitulo="">
        <div>
          <h1 className="text-xl font-bold">{pontoDeColeta.nome}</h1>
          <h2 className='font-bold'>Localização: {pontoDeColeta.localizacao}</h2>
        </div>
        <div>{RenderTest()}</div>
        <Link href={`cadastrar`}>
        <button className='bg-green-500 p-3 m-8 rounded-xl'>Cadastrar novo item</button>
        </Link>
      </Layout>
    </div>
  );
}
