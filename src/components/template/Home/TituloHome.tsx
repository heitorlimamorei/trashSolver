import {motion} from 'framer-motion'

const TituloHome = () => {
    return (
        <motion.div initial = {{y: -100}} animate = {{y:50}} transition ={{duration:0.5}} className="self-start justify-self-end ">
              <h1 className="font-bold text-xl9 leading-none">Trash <br/> Solver</h1>
              <h2 className=" text-lg text-white font-bold shadow-light ml-3 ">A sua melhor solução para o descarte de lixo eletrônico</h2>
            </motion.div>
    )
}

export default TituloHome