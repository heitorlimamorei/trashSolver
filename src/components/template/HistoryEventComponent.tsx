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
}

export default function HistoryEventComponent(
  props: HistoryEventComponentProps
) {
  return (
    <li className={`${props.className}`}>
      <p><h1 className="text-[40px] font-bold my-1">Descrição:</h1> {props.descricao}</p>
      <h1>{props.tipo}</h1>
      {props.formatedDate.day}/{props.formatedDate.month}/
      {props.formatedDate.year}
      <span>{props.children}</span>
    </li>
  );
}
