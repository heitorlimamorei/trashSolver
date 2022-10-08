import Link from "next/link"

const BotaoTroca = () => {
    return (
        <div className="order-4 m-1 row-span-1 justify-self-end  self-center bg-green-600 rounded-xl h-20 w-2/3 flex items-center justify-center text-gray-200">
      <Link href="/trocas/realizarTroca">
        <button className="order-4 m-1 row-span-1 justify-self-end  self-center bg-green-600 rounded-xl h-20 w-2/3 flex items-center justify-center text-gray-200">
          Trocar
        </button>
      </Link>
    </div>
    )
}

export default BotaoTroca