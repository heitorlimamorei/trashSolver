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
    const itemRef  = await addDoc(itemsRef, item)
    const itemFinal = await addDoc(itemsRef, {
        pontoId : item.pontoId,
        datadepostagem: new Date(),
        nome: item.nome,
        photourl: item.photourl,
        quempostou: item.quempostou,
        tipo: item.tipo
    });
    return await getItemById(item.pontoId, itemFinal.id);
}
async function deleteItem(pontoId:string, itemId:string){
    const itemRef = doc(db, `pontosDeColeta/${pontoId}/itens/${itemId}`);
    const docRef = await deleteDoc(itemRef)
    return await getItems(pontoId)
}
async function updateItem(item){
    const itemRef = doc(db, `pontosDeColeta/${item.pontoId}/itens/${item.itemId}`)
    const docRef = await updateDoc(itemRef, item)
    return await getItemById(item.pontoId, itemRef.id)
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