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
          <button onClick={async () => setPontoDeColeta(await pontoDeColeta.deletar(item.id))}>Deletar</button>
          <button onClick={async () => setPontoDeColeta(await pontoDeColeta.coletar(item.id, usuario.email))} className="ml-1">Coletar</button>
          
        </li>
      );
    });
  }
  return (
    <div className={``}>
      <Layout titulo="Edite" subtitulo="">
        <div>
          <h1>{pontoDeColeta.nome}</h1>
          <h2>Localização: {pontoDeColeta.localizacao}</h2>
        </div>
        <div>{RenderTest()}</div>
        <Link href={`cadastrar`}>
        <button>Cadastrar novo item</button>
        </Link>
      </Layout>
    </div>
  );
}
