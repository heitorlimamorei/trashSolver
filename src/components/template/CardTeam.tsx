/* eslint-disable @next/next/no-img-element */

import Link from "next/link"


const Card = (props) => {
    return (
        <div className="md:w-[18%] w-full h-full bg-indigo-50 shadow-xl dark:bg-gray-600 rounded-xl flex flex-col text-black dark:text-gray-200">
            <div className='bg-green-600 rounded-t-xl h-[40%] w-full flex flex-col justify-items-center items-center'>
                <img className='rounded-full mt-4 md:w-[30%] w-[40%] ml-[1%] h-[70%]' src={props.src} alt="Imagem Equipe" />

                <h2 className='mt-4 font-bold text-[20px] text-gray-200'>{props.nome}</h2>
            </div>
            <div className='flex flex-col w-full items-center justify-items-center flex-wrap p-5 text-center'>
                <h2 className='mt-2 font-bold text-[15px]'>Biografia</h2>
                <p>{props.Biografia}</p>
            </div>
            <div className='flex flex-col w-[40%] h-[7%] items-center justify-items-center flex-wrap text-center bg-black ml-[29%] rounded-xl'>
             <Link className='self-center justify-self-center w-[30%]' href={props.githubUrl}>Meu Github</Link>
            </div>
        </div>
    )
}

export default Card