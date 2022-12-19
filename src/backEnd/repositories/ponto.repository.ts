import { db } from "../../firebase/config";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
async function getPontosDeColeta(){
    let normalizado = []
    const pontosRef = collection(
        db,
        `pontosDeColeta`
    );
    let pontosNn =  await getDocs(pontosRef);
    pontosNn.forEach((ponto) => {
        normalizado.push({id: ponto.id, ...ponto.data()});
    })
    return normalizado;
}
async function getPontoDeColetaById(id:string){
    const pontoRef = doc(db, `pontosDeColeta/${id}`);
    const ponto =  await getDoc(pontoRef)
    return {id: ponto.id, ...ponto.data()}
}
async function createPontoDeColeta(ponto) {
    const pontosRef = collection(
        db,
        `pontosDeColeta`
    );
    const pontoRef  = await addDoc(pontosRef, ponto)
    const subColletionRef = collection(
        db,
        `pontosDeColeta/${pontoRef.id}/itens`
    );
    const itenVazioRef = await addDoc(subColletionRef, {});
    return await getPontoDeColetaById(pontoRef.id)
}
async function deletePontoDeColeta(id:string){
    const pontoRef = doc(db, `pontosDeColeta/${id}`);
    const docRef = await deleteDoc(pontoRef)
    return await getPontosDeColeta()
}
async function updatePontoDeColeta(ponto){
    const pontoRef = doc(db, `pontosDeColeta/${ponto.id}`)
    const docRef = await updateDoc(pontoRef, ponto)
    return await getPontoDeColetaById(pontoRef.id)
}
async function pontoExists(id:string){
    const docRef = doc(db, `pontosDeColeta/${id}`)
    const pontoRef = await getDoc(docRef)
    return pontoRef.exists()
}
export default {
    getPontosDeColeta,
    getPontoDeColetaById,
    createPontoDeColeta,
    deletePontoDeColeta,
    updatePontoDeColeta,
    pontoExists
}