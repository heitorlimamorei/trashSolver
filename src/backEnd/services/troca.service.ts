import trocaRepository from "../repositories/troca.repository";
interface Troca {
  nome: string;
  descricao: string;
  photourl: string;
  quemcriou: string;
  tipo: string;
  trocado: boolean;
  listadeinteresses: string[];
  trocaRealizadaId: string;
}
interface TrocaUpdate {
  nome: string;
  id: string;
  descricao: string;
  photourl: string;
  quemcriou: string;
  tipo: string;
  trocado: boolean;
  listadeinteresses: string[];
  trocaRealizadaId: string;
}
async function getTrocas() {
  return await trocaRepository.getTrocas();
}
async function getTrocaById(id) {
  return await trocaRepository.getTrocaById(id);
}
async function deleteTroca(id) {
  if (await trocaRepository.trocaExists(id)) {
    return await trocaRepository.deleteTroca(id);
  } else {
    throw new Error("Troca não existe");
  }
}
async function createTroca(troca: Troca) {
  return await trocaRepository.createTroca(troca);
}
async function updateTroca(troca: TrocaUpdate) {
  if (await trocaRepository.trocaExists(troca.id)) {
    return await trocaRepository.updateTroca(troca);
  } else {
    throw new Error("Troca não existe");
  }
}
export default {
  getTrocas,
  getTrocaById,
  createTroca,
  deleteTroca,
  updateTroca,
};
