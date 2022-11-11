/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import profilePic from "../../../../public/83692.jpg"

const ImagemHome =(props) => {
    return (
        <div  className={`p-4 w-full h-2/3 rounded-t-xl ${props.className}`}>
            <img src={props.src} alt="Imagem" className={`w-full h-full rounded-t-xl`}/>
        </div>
    )
}

export default ImagemHome