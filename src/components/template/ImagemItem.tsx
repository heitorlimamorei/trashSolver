import Image from 'next/image'
import profilePic from "../../.././public/83692.jpg"

const ImagemItem =() => {
    return (
        <Image src={profilePic}  alt = "Imagem do item" className=" row-span-1 w-full h-full rounded-l-xl "/>
    )
}

export default ImagemItem