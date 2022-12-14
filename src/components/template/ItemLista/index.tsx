import { motion } from "framer-motion";
import ListaDeInteresses from "./ListaDeInteresses";
import ConteudoItem from "./ConteudoItem";
import ImagemItem from "./ImagemItem";
import BotaoTroca from "./BotaoTroca";
import BotaoChat from "./BotaoChat";
import {useState, useEffect} from "react";

import axios from 'axios';
interface ItemListapProps {
  id?:any;
  Nome: string;
  Descricao: string;
  trocar: () => void;
  listaInteresses: any[]
  urlImg:string;
}

const ItemLista = (props: ItemListapProps) => {
  const [isHover, toggleHover] = useState(false);
  const [imageUrl, setImageUrl] = useState('')
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  async function  getImage(id:string):Promise<string> {
    const resp = await axios.get(`/api/trocas/images/${id}`)
    let image = await resp.data
    return await image.url
  }
  async function loadImage(): Promise<void> {
    const resp = await getImage(props.urlImg)
    setImageUrl(resp)
  }
  useEffect(() => {
    loadImage()
  },[])
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "flex",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="bg-indigo-50 shadow-xl text-gray-900 dark:bg-gray-600 rounded-xl  flex flex-col  w-11/12 h-full grow-1 my-4 dark:text-white"
    >
      <ImagemItem url={imageUrl}/>

      <ConteudoItem Nome={props.Nome} Descricao={props.Descricao} className={`px-1 py-1`} />

      <div className="flex flex-row">
        <BotaoTroca onClick={props.trocar} />
      </div>

      <ListaDeInteresses
        onHoverStart={toggleHoverMenu}
        onHoverEnd={toggleHoverMenu}
        condition={isHover}
        animation={subMenuAnimate}
        listaInteresses={props.listaInteresses}
      />
    </motion.div>
  );
};

export default ItemLista;
