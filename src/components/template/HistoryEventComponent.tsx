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
      <h1>{props.descricao}</h1>
      <h3>{props.tipo}</h3>
      {props.formatedDate.day}/{props.formatedDate.month}/
      {props.formatedDate.year}
      <span>{props.children}</span>
    </li>
  );
}
