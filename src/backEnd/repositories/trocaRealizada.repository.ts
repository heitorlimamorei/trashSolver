import { db } from "../../firebase/config";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
async function getTrocasRealizadas() {
  let normalizado = [];
  const trocaRealizadasRef = collection(db, `trocasrealizadas/`);
  let trocaRealizadasNn = await getDocs(trocaRealizadasRef);
  trocaRealizadasNn.forEach((trocaRealizada) => {
    normalizado.push({ id: trocaRealizada.id, ...trocaRealizada.data() });
  });
  return normalizado;
}
async function getTrocaRealizadaById(trocaRealizadaId: string) {
  const trocas = await getTrocasRealizadas();
  return trocas.find(
    (trocaRealizada) => trocaRealizada.id === trocaRealizadaId
  );
}
async function createTrocaRealizada(trocaRealizada) {
  const trocaRealizadasRef = collection(
    db,
    `trocasrealizadas` // os itens terão que ter a propriedade pontoId
  );
  const trocaRealizadaFinal = await addDoc(trocaRealizadasRef, {
    emailCriador: trocaRealizada.emailCriador,
    emailInteressado: trocaRealizada.emailInteressado,
    idDaTroca: trocaRealizada.idDaTroca,
    pontoDeColetaId: trocaRealizada.pontoDeColetaId,
    intemDeInteresse: trocaRealizada.intemDeInteresse,
  });
  return await getTrocaRealizadaById(trocaRealizadaFinal.id);
}
async function deleteTrocaRealizada(trocaRealizadaId: string) {
  const trocaRealizadaRef = doc(db, `trocasrealizadas/${trocaRealizadaId}`);
  const docRef = await deleteDoc(trocaRealizadaRef);
  return await getTrocasRealizadas();
}
async function updateTrocaRealizada(trocaRealizada) {
  const trocaRealizadaRef = doc(db, `trocasrealizadas/${trocaRealizada.id}`);
  const docRef = await updateDoc(trocaRealizadaRef, trocaRealizada);
  return await getTrocaRealizadaById(trocaRealizadaRef.id);
}
async function trocaRealizadaExists(trocaRealizadaId: string) {
  const docRef = doc(db, `trocasrealizadas/${trocaRealizadaId}`);
  const trocaRealizadaRef = await getDoc(docRef);
  return trocaRealizadaRef.exists();
}
export default {
  getTrocasRealizadas,
  getTrocaRealizadaById,
  createTrocaRealizada,
  deleteTrocaRealizada,
  updateTrocaRealizada,
  trocaRealizadaExists,
};
