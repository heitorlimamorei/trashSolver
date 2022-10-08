import trocaRealizadaRepository from "../repositories/trocaRealizada.repository";
import trocaRepository from "../repositories/troca.repository";
import trocaServices from "./troca.service";
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
  const id = trocaRealizada.idDaTroca;
  if (await trocaRepository.trocaExists(id)) {
    const troca = await trocaServices.getTrocaById(id);
    if (!(await troca.trocado)) {
      const resp = await trocaRealizadaRepository.createTrocaRealizada(
        trocaRealizada
      );
      troca.trocado = true;
      troca.trocaRealizadaId = resp.id;
      await trocaServices.updateTroca(troca);
      return await resp;
    } else {
      throw new Error("Esse troca está indisponivel!");
    }
  } else {
    throw new Error("Troca não existe!");
  }
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
