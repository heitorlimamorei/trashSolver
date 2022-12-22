import Link from "next/link";
import NotFund from "../../components/template/ErrorMsg";
import Layout from "../../components/template/Layout";
import Item from "../../components/template/PontoDeColetas/Item";
import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";
import { bookIcon } from "../../components/icons/Icones";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function EditarPontoDeColeta() {
  const { pontoDeColeta, setPontoDeColeta, tema } = useAppData();
  const { usuario } = useAuth();
  async function handlleDeleteItem(id: string) {
    try {
      setPontoDeColeta(await pontoDeColeta.deletar(id));
      toast.success("Item deletado com sucesso!", {
        theme: tema === "dark" ? "dark" : "light",
      });
    } catch (err) {
      toast.error(err.message, { theme: "dark" });
    }
  }
  async function handlleGetItem(id, email) {
    try {
      setPontoDeColeta(await pontoDeColeta.coletar(id, email));
      toast.success("Item coletado com sucesso!", {
        theme: tema === "dark" ? "dark" : "light",
      });
    } catch (err) {
      toast.error(err.message, { theme: "dark" });
    }
  }
  function renderItens() {
    return pontoDeColeta.listaDeItens
      .filter((item) => !item.coletado)
      .map((item) => {
        return (
          <Item
            key={item.id}
            nome={item.nome}
            quempostou={item.quempostou}
            descricao={item.descricao}
            deletar={async () => await handlleDeleteItem(item.id)}
            coletar={async () => await handlleGetItem(item.id, usuario.email)}
          />
        );
      });
  }
  return pontoDeColeta.id ? (
    <div className={``}>
      <Layout titulo="" subtitulo="">
        <ToastContainer />
        <div className="dark:text-white flex flex-col">
          <div>
            <h1 className="text-[30px] font-bold mt-2">{pontoDeColeta.nome}</h1>
            <h2 className="">
              <span className="font-bold">Localização:</span>{" "}
              {pontoDeColeta.localizacao}
            </h2>
          </div>
          <div className="flex justify-end w-full">
            <Link href={`historico`}>
              <button className="bg-green-500 py-3 px-3 m-1 rounded-xl text-gray-200">
                {bookIcon}
              </button>
            </Link>
            <Link href={`cadastrar`}>
              <button className="bg-green-500 p-3 m-1 rounded-xl md:w-2/12 w-5/12">
                Cadastrar novo item
              </button>
            </Link>
          </div>
          <div>
            <ul>{renderItens()}</ul>
          </div>
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
            routes={{
              routeOne: "/pontoDeColetas",
              routeTwo: "/",
            }}
            routeMsg={{
              msgOne: "Voltar a lista de pontos de coleta!",
              msgTwo: "Voltar a Home",
            }}
          />
        </div>
      </Layout>
    </div>
  );
}
