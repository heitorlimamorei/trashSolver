import {ChatIcon} from "../.././icons/Icones"

const BotaoChat = () => {
    return (
        <button className="order-last m-1 row-span-1 justify-self-start  self-center bg-green-600 rounded-xl h-20 w-1/2 flex items-center justify-center text-gray-200">
        {ChatIcon}
      </button>
    )
}

export default BotaoChat