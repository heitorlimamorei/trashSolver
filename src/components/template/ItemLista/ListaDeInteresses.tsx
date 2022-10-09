import {motion} from 'framer-motion'
import {ToogleIcon} from '../../icons/Icones'
import React from "react"


const ListaDeInteresses = (props) => {
    return (
        <motion.div
            className="h-1/6"
            onHoverStart={props.onHoverStart}
            onHoverEnd={props.onHoverEnd}>
            
            <div className="flex flex-row">
                <a className="text-sm m-1 mt-3">Lista de Interesses</a>
                <div className="m-1 mt-3">{ToogleIcon}</div>
            </div>

            <motion.div
              className="bg-green-600 rounded-xl m-2"
              initial="exit"
              animate={props.condition ? "enter" : "exit"}
              variants={props.animation}
            >
              <div className="sub-menu-container">
                <ul>
                    <li>{props.listaInteresses}</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                </ul>
              </div>
            </motion.div>
            </motion.div>
    )
}

export default ListaDeInteresses