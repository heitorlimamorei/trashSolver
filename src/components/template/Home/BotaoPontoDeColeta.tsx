import {motion} from 'framer-motion'

const BotaoPontoDeColeta = () => {
    return(
        <motion.div initial = {{y:50}} animate ={{y:-20}} transition ={{duration:0.5}}>
            <h2 className="self-center justify-self-end mt-80 text-white font-bold">Encontre postos de coleta perto de você!</h2>
            <button className="bg-green-800 rounded-2xl h-32 w-3/4 text-white font-bold self-center justify-self-end ">
                 Lista de postos de coleta
            </button>
        </motion.div>
    )
}

export default BotaoPontoDeColeta