import Image from 'next/image'
import profilePic from "../../../../public/83692.jpg"

const ImagemHome =() => {
    return (
        <div  className={`w-full rounded-t-xl`}>
            <Image src={profilePic}  alt = "Imagem do " width="1000px" height="260px" className={`w-full rounded-t-xl`}/>
        </div>
    )
}

export default ImagemHome