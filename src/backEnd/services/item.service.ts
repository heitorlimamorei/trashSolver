import itemRepository from "../repositories/item.repository";
import historicoRepository from "./historico.service";
interface Item {
  nome: string;
  tipo: string;
  pontoId: string;
  quempostou: string;
  photourl: string;
  descricao: string;
  coletado: boolean;
  coletadoPor?: string;
}
interface ItemUpdate {
  id: string;
  nome: string;
  tipo: string;
  pontoId: string;
  quempostou: string;
  photourl: string;
  descricao: string;
  coletado: boolean;
  coletadoPor?: string;
}
async function getItems(pontoId) {
  return await itemRepository.getItems(pontoId);
}
async function getItemById(pontoId, itemId) {
  return await itemRepository.getItemById(pontoId, itemId);
}
async function deleteItem(pontoId, itemId) {
  if (await itemRepository.itemExists(pontoId, itemId)) {
    return await itemRepository.deleteItem(pontoId, itemId);
  } else {
    throw new Error("O item selecionado não existe!");
  }
}
async function createItem(item: Item) {
  let novoItem = await itemRepository.createItem(item);
  await historicoRepository.createEvento({
    itemId: novoItem[1].id,
    pontoId: item.pontoId,
    tipo: "post",
    realizadoPor: item.quempostou,
    descricao: `Postagem do item ${item.nome} no ponto de coleta ${item.pontoId}`,
  });
  return novoItem[0];
}
async function updateItem(item: ItemUpdate) {
  if (await itemRepository.itemExists(item.pontoId, item.id)) {
    const oldItem = await getItemById(item.pontoId, item.id);
    if (oldItem.coletado) {
      throw new Error("Este item já está coletado");
    } else {
      let itemUpdated = await itemRepository.updateItem(item);
      await historicoRepository.createEvento({
        itemId: itemUpdated[1].id,
        pontoId: item.pontoId,
        tipo: "coleta",
        realizadoPor: item.quempostou,
        descricao: `Coleta do item ${item.nome} no ponto de coleta ${item.pontoId}`,
      });
      return itemUpdated[0];
    }
  } else {
    throw new Error("O item selecionado não existe!");
  }
}
export default {
  getItems,
  getItemById,
  createItem,
  deleteItem,
  updateItem,
};
