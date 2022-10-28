

const ConteudoItem = (props) => {
    return (
        <div className="col-span-6 row-span-1">
            <div className="mb=5">
                <h1 className= "text-[30px] w-full h-1/4 font-bold ml-2  ">{props.Nome}</h1>

                <p className="w-full order-last pl-2 pr-2"><div className="font-bold">Descrição:</div>{props.Descricao}</p>
            </div>
        </div>
        
    )
}

export default ConteudoItem