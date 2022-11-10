import Image from 'next/image'
import profilePic from "../../../../public/83692.jpg"

const ImagemHome =() => {
    return (
        <div  className={`w-full h-2/3 rounded-t-xl`}>
            <img src='83692.jpg' alt="Imagem" className={`w-full h-full rounded-t-xl`}/>
        </div>
    )
}

export default ImagemHome