

const ConteudoItem = (props) => {
    return (
        <div className="col-span-6 row-span-1">
            <div className="">
                <h1 className= "text-xl w-full h-1/4 font-bold ml-2  ">{props.Nome}</h1>

                <p className="w-3/4 order-last mt-1 ml-2 "><div className="font-bold">Descrição:</div>{props.Descricao}</p>
            </div>
        </div>
        
    )
}

export default ConteudoItem