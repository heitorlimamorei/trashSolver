import { motion } from "framer-motion";
import { ToogleIcon } from "../../icons/Icones";
import React from "react";
interface ListaDeInteressesProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
  condition: boolean;
  animation: any;
  listaInteresses: any[];
}
const ListaDeInteresses = (props: ListaDeInteressesProps) => {
  function renderLista() {
    return props.listaInteresses.map((item) => (
      <li className="bg-gray-500 rounded-xl w-full m-2 px-2 py-1 text-gray-200">
        {item}
      </li>
    ));
  }
  return (
    <motion.div
      className="py-2 px-2"
      onClick={props.onHoverStart}
      
    >
      <div className="flex flex-row">
        <a className="text-sm m-1 mt-3">Lista de Interesses</a>
        <div className="m-1 mt-3">{ToogleIcon}</div>
      </div>

      <motion.div
        className="bg-indigo-50 dark:bg-gray-600 rounded-xl m-2"
        initial="exit"
        animate={props.condition ? "enter" : "exit"}
        variants={props.animation}
      >
        <div className="sub-menu-container w-full p-2">
          <ul>
            {renderLista()}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ListaDeInteresses;
