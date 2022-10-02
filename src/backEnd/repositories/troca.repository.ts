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
async function getTrocas(){
    let normalizado = []
    const trocasRef = collection(
        db,
        `trocas`
    );
    let trocasNn =  await getDocs(trocasRef);
    trocasNn.forEach((troca) => {
        normalizado.push({id: troca.id, ...troca.data()});
    })
    return normalizado;
}

async function createTroca(troca){
    const trocasRef = collection(
        db,
        `trocas`
    );
    const trocaRef  = await addDoc(trocasRef, troca)
    const subColletionRef = collection(
        db,
        `trocas/${trocaRef.id}/chat`
    );
    const chatVazio = await addDoc(subColletionRef, {});
    return await getTrocas()
}

async function getTrocaById(id:string){
    const trocaRef = doc(db, `trocas/${id}`);
    const troca =  await getDoc(trocaRef)
    return {id: troca.id, ...troca.data()}
}
async function deleteTroca(id:string){
    const trocaRef = doc(db, `trocas/${id}`);
    const docRef = await deleteDoc(trocaRef)
    return await getTrocas()
}
async function trocaExists(id:string){
    const docRef = doc(db, `trocas/${id}`)
    const trocaRef = await getDoc(docRef)
    return trocaRef.exists()
}
async function updateTroca(newTroca){
    const trocaRef =  doc(db, `trocas/${newTroca.id}`)
    const trocaF = await updateDoc(trocaRef, newTroca)
    return await getTrocas();
}
export default {
    getTrocas,
    createTroca,
    deleteTroca,
    trocaExists,
    getTrocaById,
    updateTroca
}