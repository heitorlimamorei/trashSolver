import pontoRepository from "../repositories/ponto.repository";
interface Ponto {
  criador: string;
  localizacao: string;
  tiposDeItens: string[];
}
interface PontoUpdate {
  id: string;
  criador: string;
  localizacao: string;
  tiposDeItens: string[];
}
async function getPontos() {
  return await pontoRepository.getPontosDeColeta();
}
async function getPontoById(id) {
  return await pontoRepository.getPontoDeColetaById(id);
}
async function deletePonto(id) {
  if (await pontoRepository.pontoExists(id)) {
    return await pontoRepository.deletePontoDeColeta(id);
  } else {
    throw new Error("Usuario não existe");
  }
}
async function createPonto(ponto: Ponto) {
  return await pontoRepository.createPontoDeColeta(ponto);
}
async function updatePonto(ponto: PontoUpdate) {
  if (await pontoRepository.pontoExists(ponto.id)) {
    return await pontoRepository.updatePontoDeColeta(ponto);
  } else {
    throw new Error("Usuario não existe");
  }
}
export default {
  getPontos,
  getPontoById,
  createPonto,
  deletePonto,
  updatePonto,
};
