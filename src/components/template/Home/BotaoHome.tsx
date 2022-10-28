interface BotaoHomeProps {
  Nome: string;
  icon: any;
  onClick: (ev?: any) => void;
}
export default function BotaoHome(props: BotaoHomeProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className="dark:bg-green-400 bg-green-800 w-3/12 h-2/6 rounded-2xl p-6 mt-8"
    >
      <div className="w-full h-2/3 text-white dark:text-black">
        {props.icon(8)}
      </div>
      <div className="text-white dark:text-black">{props.Nome}</div>
    </button>
  );
}
