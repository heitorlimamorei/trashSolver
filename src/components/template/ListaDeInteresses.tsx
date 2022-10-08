import {motion} from 'framer-motion'
import {ToogleIcon} from '../icons/Icones'
import React from "react"

const ListaDeInteresses = (props) => {
    const [isHover, toggleHover] = React.useState(false);
    const toggleHoverMenu = () => {
      toggleHover(!isHover);
    }

    const subMenuAnimate = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.5,
            delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
      };
    return (
        <motion.div
            className="h-1/6"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}>
            
            <div className="flex flex-row">
                <a className="text-sm m-1 mt-3">Lista de Interesses</a>
                <div className="m-1 mt-3">{ToogleIcon}</div>
            </div>

            <motion.div
              className="bg-green-600 rounded-xl m-2"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="sub-menu-background" />
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