import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/template/Layout";
import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";

export default function EditarPontoDeColeta() {
  const {pontoDeColeta, setPontoDeColeta} = useAppData();
  const {usuario} = useAuth()
  function RenderTest() {
    return pontoDeColeta.listaDeItens.filter((item) => !item.coletado).map((item) => {
      return (
        <li key={item.id}>
          <h1>{item.nome}</h1>
          <p>{item.descricao}</p>
          <h3>{item.quempostou}</h3>
          <button onClick={async () => setPontoDeColeta(await pontoDeColeta.deletar(item.id))}
          className='bg-red-400 rounded-xl m-2 p-2'>Deletar</button>
          <button onClick={async () => setPontoDeColeta(await pontoDeColeta.coletar(item.id, usuario.email))} className="bg-green-500 rounded-xl p-2 ml-2">Coletar</button>
          
        </li>
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
