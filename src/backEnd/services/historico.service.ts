import historicoRepository from '../repositories/historico.repository'
import itemRepository from '../repositories/item.repository'
import trocaRepository from '../repositories/troca.repository'
interface evento {
    pontoId:string;
    itemId?:string;
    trocaId?:string;
    tipo:string;
    realizadoPor:string;
    data?: any;
    descricao: string;
}
async function getHistorico(pontoId){
    return await historicoRepository.getHistorico(pontoId)
}
async function getEventoById(pontoId, eventoId){
    return await historicoRepository.getEventoById(pontoId, eventoId);
}
async function createEvento(newEvento:evento) {
    if(newEvento.tipo === 'troca'){
        if(await trocaRepository.trocaExists(newEvento.trocaId)){
            return await historicoRepository.createEvent(newEvento)
        } else {
            throw new Error('Troca não existe no id:' + newEvento.trocaId)
        }
    } else if(await itemRepository.itemExists(newEvento.pontoId, newEvento.itemId)) {
        return await historicoRepository.createEvent(newEvento)
    } else {
        throw new Error('Item Id invalido ou tipo não existente')
    }
}



export default {
    getHistorico,
    getEventoById,
    createEvento
}