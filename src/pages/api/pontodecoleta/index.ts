import type { NextApiRequest, NextApiResponse } from "next";
import pontoService from "../../../backEnd/services/ponto.service";
export default async function PontoController(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await pontoService.getPontos());

    } else if (req.method === "POST") {
      const ponto = req.body;

      if ((ponto.nome, ponto.criador, ponto.localizacao, ponto.tiposDeItens)) {
        res.status(200).json(await pontoService.createPonto(ponto));

      } else {
        throw new Error("Está faltando informações obrigatorias");
      }
    } else if (req.method === "PUT") {
      const ponto = req.body;

      if ((ponto.id, ponto.nome, ponto.criador, ponto.localizacao, ponto.tiposDeItens)) {
        res.status(200).json(await pontoService.updatePonto(ponto));

      } else {
        throw new Error("Está faltando informações obrigatorias");
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
