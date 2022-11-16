

const Historico = (props) => {
    return (
        <div className="dark:bg-gray-600 dark:text-white w-[98%] h-[20%] rounded-xl shadow-xl p-3">
            <h1 className="text-[40px] font-bold my-1">{props.tipo}</h1>

            <div>
                <h2 className="my-1 text-[20px] font-bold">Realizado Por:</h2><p>{props.realizadoPor}</p>
            </div>

            <div>
                <h2 className="my-1 text-[20px] font-bold">Data do Evento:</h2><p>{props.data}</p>
            </div>

            <p className="my-1">
            <div className="font-bold text[20px]">Descrição:</div>
            {props.Descricao}
            </p>
        </div>
    )
}

export default Historico