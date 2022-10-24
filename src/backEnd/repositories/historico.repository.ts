import { db } from "../../firebase/config";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";
async function getHistorico(pontoId:string) {
    let normalizado = []
    const historyRef = collection(
        db,
        `pontosDeColeta/${pontoId}/historico`
    );
    const historyNn = await getDocs(historyRef);
    historyNn.forEach(evento => {
        normalizado.push({id: evento.id, ...evento.data()})
    })
    return normalizado
}
async function getEventoById(pontoId:string, eventoId:string){ // COM ERRO, ANALISAR
    const eventos = await getHistorico(pontoId);
    return eventos.find((evento) => evento.id === eventoId)
}
async function createEvent(newEvent){
    const historyRef = collection(
        db,
        `pontosDeColeta/${newEvent.pontoId}/historico`
    );
    if(newEvent.tipo === "troca"){
        const eventoFinal = await addDoc(historyRef, {
            pontoId: newEvent.pontoId,
            tipo: newEvent.tipo,
            descricao: newEvent.descricao,
            data: new Date(),
            realizadoPor: newEvent.realizadoPor,
            trocaId: newEvent.trocaId
        })
    } else if(newEvent.tipo === "post" || newEvent.tipo === "coleta"){
        const eventoFinal = await addDoc(historyRef, {
            pontoId: newEvent.pontoId,
            tipo: newEvent.tipo,
            descricao: newEvent.descricao,
            data: new Date(),
            realizadoPor: newEvent.realizadoPor,
            itemId: newEvent.itemId
        })
    }
    return await getHistorico(newEvent.pontoId)
}
export default {
    getHistorico,
    getEventoById,
    createEvent
}