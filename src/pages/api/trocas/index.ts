import type { NextApiRequest, NextApiResponse } from "next";
import trocasService from "../../../backEnd/services/troca.service";
export default async function TrocaController(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await trocasService.getTrocas());
    } else if (req.method === "POST") {
      const troca = req.body;

      if (
        (troca.descricao,
        troca.photourl,
        troca.quemcriou,
        troca.tipo,
        troca.trocado,
        troca.listadeinteresses)
      ) {
        res.status(200).json(await trocasService.createTroca(troca));
      } else {
        throw new Error("Está faltando informações obrigatorias");
      }
    } else if (req.method === "PUT") {
      const troca = req.body;

      if (
        (troca.id,
        troca.descricao,
        troca.photourl,
        troca.quemcriou,
        troca.tipo,
        troca.trocado,
        troca.listadeinteresses)
      ) {
        res.status(200).json(await trocasService.updateTroca(troca));
      } else {
        throw new Error("Está faltando informações obrigatorias");
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
