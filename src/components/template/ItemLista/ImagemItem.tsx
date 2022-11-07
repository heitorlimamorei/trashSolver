import Image from 'next/image'
import profilePic from "../../../../public/83692.jpg"

const ImagemItem =() => {
    return (
        <div  className={`w-full rounded-t-xl`}>
            <Image src={profilePic}  alt = "Imagem do item" className={`w-full rounded-t-xl`}/>
        </div>
    )
}

export default ImagemItem