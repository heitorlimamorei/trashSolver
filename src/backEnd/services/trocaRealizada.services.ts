import trocaRealizadaRepository from "../repositories/trocaRealizada.repository.js";
interface TrocaRealizada {
  emailCriador: string;
  emailInteressado: string;
  idDaTroca: string;
  intemDeInteresse: string;
  pontoDeColetaId: string;
}
interface TrocaRealizadaUpdate {
  id: string;
  emailCriador: string;
  emailInteressado: string;
  idDaTroca: string;
  intemDeInteresse: string;
  pontoDeColetaId: string;
}
async function getTrocaRealizadas() {
  return await trocaRealizadaRepository.getTrocasRealizadas();
}
async function getTrocaRealizadaById(id) {
  return await trocaRealizadaRepository.getTrocaRealizadaById(id);
}
async function deleteTrocaRealizada(id) {
  if (await trocaRealizadaRepository.trocaRealizadaExists(id)) {
    return await trocaRealizadaRepository.deleteTrocaRealizada(id);
  } else {
    throw new Error("Usuario não existe");
  }
}
async function createTrocaRealizada(trocaRealizada: TrocaRealizada) {
  return await trocaRealizadaRepository.createTrocaRealizada(trocaRealizada);
}
async function updateTrocaRealizada(trocaRealizada: TrocaRealizadaUpdate) {
  if (await trocaRealizadaRepository.trocaRealizadaExists(trocaRealizada.id)) {
    return await trocaRealizadaRepository.updateTrocaRealizada(trocaRealizada);
  } else {
    throw new Error("Usuario não existe");
  }
}
export default {
  getTrocaRealizadas,
  getTrocaRealizadaById,
  createTrocaRealizada,
  deleteTrocaRealizada,
  updateTrocaRealizada,
};
