import { motion } from "framer-motion"
import ListaDeInteresses from "./ListaDeInteresses"
import ConteudoItem from "./ConteudoItem"
import ImagemItem from "./ImagemItem"
import BotaoTroca from "./BotaoTroca"
import BotaoChat from "./BotaoChat"


const ItemLista = (props) => {
    
return (

  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="bg-indigo-50 shadow-xl text-gray-900 dark:bg-gray-300 rounded-xl  grid  grid-cols-10  grid-rows-1 w-100 h-1/6 my-4 dark:text-gray-900">

    <ImagemItem/>

    <ConteudoItem Nome ={props.Nome} Descricao = {props.Descricao} />

    <ListaDeInteresses/>

    <BotaoTroca/>

    <BotaoChat/>

  </motion.div>
)

}

export default ItemLista