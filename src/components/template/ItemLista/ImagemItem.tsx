import Image from 'next/image'
import profilePic from "../../../../public/83692.jpg"

const ImagemItem =() => {
    return (
        <div>
            <Image src={profilePic}  alt = "Imagem do item" className={`w-20 rounded-t-xl`}/>
        </div>
    )
}

export default ImagemItem