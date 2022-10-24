import historicoRepository from '../repositories/historico.repository'
interface evento {
    pontoId:string;
    itemId?:string;
    trocaId?:string;
    tipo:string;
    realizadoPor:string;
    data?: any;
}
async function getHistorico(pontoId){
    return await historicoRepository.getHistorico(pontoId)
}


export default {}