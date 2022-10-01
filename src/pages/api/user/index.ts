import type { NextApiRequest, NextApiResponse } from "next";
import userService from "../../../backEnd/services/user.service";
export default async function User(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await userService.getUsers());
    } else if (req.method === "POST") {
      const user = req.body;
      if (
        (user.name,
        user.salarioBruto,
        user.planoDeSaudeValor,
        user.ipvaParcelamento,
        user.ipva,
        user.iptuParcelamento,
        user.iptu,
        user.dependentesPlanoValor,
        user.dependentesNumero)
      ) {
        res.status(200).json(await userService.createUser(user));
      } else {
        throw new Error("Está faltando informações obrigatorias")
      }
    } else if(req.method === "PUT"){
        const user = req.body;
        if (
            (
            user.id,
            user.name,
            user.salarioBruto,
            user.planoDeSaudeValor,
            user.ipvaParcelamento,
            user.ipva,
            user.iptuParcelamento,
            user.iptu,
            user.dependentesPlanoValor,
            user.dependentesNumero)
          ) {
            res.status(200).json(await userService.updateUser(user));
          } else {
            throw new Error("Está faltando informações obrigatorias")
          }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
