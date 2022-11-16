import {check, upload, usersGroupIcon} from '../../components/icons/Icones'
interface HistoryEventComponentProps {
  children: any;
  descricao: string;
  tipo: string;
  formatedDate: {
    day: any;
    month:any;
    year:any;
  }
  className?: string;
  icone:any;
}

export default function HistoryEventComponent(
  props: HistoryEventComponentProps
) {
  return (
    <li className={`my-4 ${props.className}`}>
      <h1 className="font-bold text-[30px] capitalize flex flex-row"><span className='my-3 mr-1'>{props.icone}</span> {props.tipo}</h1>
      <p className='min[400px]:text-[8px]'><span className="text-[20px] font-bold my-6 mr-1">Descrição:</span>{props.descricao}</p>
      <p><span className="text-[20px] font-bold my-3">Data do evento:</span> {props.formatedDate.day}/{props.formatedDate.month}/
      {props.formatedDate.year}</p>
      <span>{props.children}</span>
    </li>
  );
}
