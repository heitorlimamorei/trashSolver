import { motion } from "framer-motion";
import ListaDeInteresses from "./ListaDeInteresses";
import ConteudoItem from "./ConteudoItem";
import ImagemItem from "./ImagemItem";
import BotaoTroca from "./BotaoTroca";
import BotaoChat from "./BotaoChat";
import React from "react";

interface ItemListapProps {
  Nome: string;
  Descricao: string;
  trocar: () => void;
  listaInteresses: any[]
}

const ItemLista = (props: ItemListapProps) => {
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

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
      className="bg-indigo-50 shadow-xl text-gray-900 dark:bg-gray-600 rounded-xl  flex flex-col md:3/6 xl:w-2/6  w-full  h-1/6 my-4 dark:text-white"
    >
      <ImagemItem />

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
