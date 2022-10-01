import userRepository from "../repositories/user.repository";
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
interface UserUpdate {
  id: string;
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
async function getUsers() {
  return await userRepository.getUsers();
}
async function getUserById(id) {
  return await userRepository.getUserById(id);
}
async function deleteUser(id) {
  if (await userRepository.userExists(id)) {
    return await userRepository.deleteUser(id);
  } else {
    throw new Error("Usuario não existe");
  }
}
async function createUser(user: User) {
  return await userRepository.createUser(user);
}
async function updateUser(user: UserUpdate) {
  if (await userRepository.userExists(user.id)) {
    return await userRepository.updateUser(user);
  } else {
    throw new Error("Usuario não existe");
  }
}
export default {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
