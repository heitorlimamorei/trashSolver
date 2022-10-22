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
async function getItems(pontoId:string){
    let normalizado = []
    const itemsRef = collection(
        db,
        `pontosDeColeta/${pontoId}/itens`
    );
    let itemsNn =  await getDocs(itemsRef);
    itemsNn.forEach((item) => {
        normalizado.push({id: item.id, ...item.data()});
    })
    return normalizado;
}
async function getItemById(pontoId:string, itemId:string){ // COM ERRO, ANALISAR
    const itens = await getItems(pontoId);
    return itens.find((item) => item.id === itemId)
}
async function createItem(item) {
    const itemsRef = collection(
        db,
        `pontosDeColeta/${item.pontoId}/itens` // os itens terão que ter a propriedade pontoId
    );
    const itemFinal = await addDoc(itemsRef, {
        pontoId : item.pontoId,
        datadepostagem: item.datadepostagem,
        nome: item.nome,
        photourl: item.photourl,
        quempostou: item.quempostou,
        tipo: item.tipo,
        coletado: item.coletado,
        descricao: item.descricao,
        dataDaColeta: item.dataDaColeta,
        coletadoPor: item.coletadoPor

    });
    return await getItems(item.pontoId);
}
async function deleteItem(pontoId:string, itemId:string){
    const itemRef = doc(db, `pontosDeColeta/${pontoId}/itens/${itemId}`);
    const docRef = await deleteDoc(itemRef)
    return await getItems(pontoId)
}
async function updateItem(item){
    const itemRef = doc(db, `pontosDeColeta/${item.pontoId}/itens/${item.id}`)
    const docRef = await updateDoc(itemRef, item)
    return await getItems(item.pontoId)
}
async function itemExists(pontoId:string, itemId:string){
    const docRef = doc(db, `pontosDeColeta/${pontoId}/itens/${itemId}`)
    const itemRef = await getDoc(docRef)
    return itemRef.exists()
}
export default {
    getItems,
    getItemById,
    createItem,
    deleteItem,
    updateItem,
    itemExists
}