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
interface User {
    dependentesNumero: number;
    dependentesPlanoValor: number;
    iptu: number;
    iptuParcelamento: number;
    ipva: number;
    ipvaParcelamento: number;
    name: string;
    planoDeSaudeValor: number;
    salarioBruto: number;
}
async function getUsers(){
    let normalizado = []
    const usersRef = collection(
        db,
        `users`
    );
    let usersNn =  await getDocs(usersRef);
    usersNn.forEach((user) => {
        normalizado.push({id: user.id, ...user.data()});
    })
    return normalizado;
}
async function getUserById(id:string){
    const userRef = doc(db, `users/${id}`);
    const user =  await getDoc(userRef)
    return {id: user.id, ...user.data()}
}
async function createUser(user: User) {
    const usersRef = collection(
        db,
        `users`
    );
    const userRef  = await addDoc(usersRef, user)
    return await getUserById(userRef.id)
}
async function deleteUser(id:string){
    const userRef = doc(db, `users/${id}`);
    const docRef = await deleteDoc(userRef)
    return await getUsers()
}
async function updateUser(user){
    const userRef = doc(db, `users/${user.id}`)
    const docRef = await updateDoc(userRef, user)
    return await getUserById(userRef.id)
}
async function userExists(id:string){
    const docRef = doc(db, `users/${id}`)
    const userRef = await getDoc(docRef)
    return userRef.exists()
}
export default {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    userExists
}