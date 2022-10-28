import Link from "next/link"
interface BotaoTrocaProps {
  onClick: () => void;
  className?: string;
}
const BotaoTroca = (props:BotaoTrocaProps) => {
    return (
        <div className={`order-4 m-1 row-span-1 justify-self-end  self-center bg-green-600 rounded-xl h-20 w-full flex items-center justify-center text-gray-200 ${props?.className} `}>
      
        <button onClick={props.onClick} className="order-4 m-1 row-span-1 justify-self-end  self-center bg-green-600 rounded-xl h-20 w-2/3 flex items-center justify-center text-gray-200">
          Trocar
        </button>
    </div>
    )
}

export default BotaoTroca