import {lixo} from '../../icons/Icones'
import {check} from '../../icons/Icones'

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
    <li className="bg-indigo-50 rounded-xl px-3 py-3 list-none capitalize mt-5 dark:bg-gray-600">
      <h1 className='text-[20px] font-bold'>{props.nome}</h1>
      <p className='my-2'><span className='font-bold'>Descrição: </span>{props.descricao}</p>
      <h3><span className='font-bold'>Criador: </span>{props.quempostou}</h3>
      <div className='flex flex-row mt-4'>
        <button
          onClick={async () =>
            await props.deletar()
          }
          className="bg-red-400 rounded-xl h-10 mx-2 p-2"
        >
          {lixo}
        </button>
        <button
          onClick={async () =>
              await props.coletar()
          }
          className="bg-green-500 rounded-xl w-9 h-10 p-2 mb-2 ml-2"
        >
          {check}
        </button>
      </div>
    </li>
  );
}
