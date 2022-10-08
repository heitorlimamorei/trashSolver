/* eslint-disable @next/next/no-img-element */
import {ChatIcon} from "../icons/Icones"
import Image from 'next/image'
import profilePic from "../../.././public/83692.jpg"
import { motion, Variants } from "framer-motion"
import {ToogleIcon} from "../icons/Icones"
import { useState } from "react";
import React from "react"


const ItemLista = (props) => {
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

        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="bg-indigo-50 shadow-xl text-gray-900 dark:bg-gray-300 rounded-xl  grid  grid-cols-10  grid-rows-1 w-100 h-1/6 my-4 dark:text-gray-900">

            <Image src={profilePic}  alt = "Imagem do item" className=" row-span-1 w-full h-full rounded-l-xl "/>

            <div className="col-span-6 row-span-3">
                <h1 className= "text-xl w-full h-1/4 font-bold ml-2  ">{props.Nome}</h1>

                <p className="w-3/4 order-last mt-1 ml-2 "><div className="font-bold">Descrição:</div>{props.Descricao}</p>
            </div>

            <motion.div
            className=""
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


            <button className="order-4 m-1 row-span-1 justify-self-end  self-center bg-green-600 rounded-xl h-20 w-2/3 flex items-center justify-center text-gray-200">
                Trocar
            </button>

            <button className="order-last m-1 row-span-1 justify-self-start  self-center bg-green-600 rounded-xl h-20 w-1/2 flex items-center justify-center text-gray-200">
                {ChatIcon}
            </button>

        </motion.div>
    )

}

export default ItemLista