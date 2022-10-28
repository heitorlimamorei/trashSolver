interface PontoDeColetaItemProps {
  nome: string;
  descricao: string;
  quempostou: string;
  className?: string;
  deletar: () => Promise<any>;
  coletar: () => Promise<any>;
}
export default function Item(props: PontoDeColetaItemProps) {
  return (
    <li>
      <h1>{props.nome}</h1>
      <p>{props.descricao}</p>
      <h3>{props.quempostou}</h3>
      <button
        onClick={async () =>
           await props.deletar()
        }
        className="bg-red-400 rounded-xl m-2 p-2"
      >
        Deletar
      </button>
      <button
        onClick={async () =>
            await props.coletar()
        }
        className="bg-green-500 rounded-xl p-2 ml-2"
      >
        Coletar
      </button>
    </li>
  );
}
