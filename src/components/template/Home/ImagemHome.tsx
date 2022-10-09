import {motion} from 'framer-motion'
import Image from 'next/image'
import recycle from '../../../../public/images/Recycle.png'

const ImagemHome = (props) => {
    return(
        <motion.div initial = {{x:500}} animate ={{x:-30}} transition = {{duration: 0.5}} className=" min-w-min max-w-4xl self-center justify-self-center object-fill ml-96 "><Image src ={recycle} className="opacity-50" ></Image></motion.div>
    )
}

export default ImagemHome