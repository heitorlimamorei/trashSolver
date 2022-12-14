interface SelecionarPontoProps {
  className?: string;
  nome: string;
  localizacao: string;
  onClick?: () => void;
}
export default function SelecionarPonto(props: SelecionarPontoProps) {
  return (
    <li
      onClick={() => props.onClick()} 
      className={`
    ${props.className} w-full
     py-2 px-2 
     mb-2 mt-2 
     bg-gray-100 dark:bg-gray-600 rounded-md
     cursor-pointer
     shadow-xl
    `}
    >
      <div>
        <h2 className="text-gray-800 dark:text-white font-bold">{props.nome}</h2>
      </div>
      <div>
        <span className="text-gray-600 dark:text-white">{props.localizacao}</span>
      </div>
    </li>
  );
}
