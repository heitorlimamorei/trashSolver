interface ImgemProps{
    url:string;
}
const ImagemItem =(props:ImgemProps) => {
    return (
        <div  className={`w-full rounded-t-xl`}>
            <img src={props.url} className={`w-full rounded-t-xl`}/>
        </div>
    )
}

export default ImagemItem