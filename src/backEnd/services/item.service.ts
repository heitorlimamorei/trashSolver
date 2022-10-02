import itemRepository from "../repositories/item.repository";
interface Item {
  nome: string;
  tipo: string;
  pontoId: string
  quempostou: string;
  photourl: string;
}
interface ItemUpdate {
  id: string;
  nome: string;
  tipo: string;
  pontoId: string
  quempostou: string;
  photourl: string;
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
    throw new Error("Usuario não existe");
  }
}
async function createItem(item: Item) {
  return await itemRepository.createItem(item);
}
async function updateItem(item: ItemUpdate) {
  if (await itemRepository.itemExists(item.pontoId, item.id)) {
    return await itemRepository.updateItem(item);
  } else {
    throw new Error("Usuario não existe");
  }
}
export default {
  getItems,
  getItemById,
  createItem,
  deleteItem,
  updateItem,
};
