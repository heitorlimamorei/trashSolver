import type { NextApiRequest, NextApiResponse } from "next";
import realizarTrocaService from "../../../backEnd/services/trocaRealizada.service";
export default async function RealizarTrocaController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await realizarTrocaService.getTrocaRealizadas());
    } else if (req.method === "POST") {
      const realizarTroca = req.body;

      if (
        (realizarTroca.emailCriador,
        realizarTroca.emailInteressado,
        realizarTroca.idDeTroca,
        realizarTroca.intemDeInteresse,
        realizarTroca.pontoDeColetaId)
      ) {
        res
          .status(200)
          .json(await realizarTrocaService.createTrocaRealizada(realizarTroca));
      } else {
        throw new Error("Está faltando informações obrigatorias");
      }
    } else if (req.method === "PUT") {
      const realizarTroca = req.body;

      if (
          (realizarTroca.id,
          realizarTroca.emailCriador,
          realizarTroca.emailInteressado,
          realizarTroca.idDeTroca,
          realizarTroca.intemDeInteresse,
          realizarTroca.pontoDeColetaId)
      ) {
        res
          .status(200)
          .json(await realizarTrocaService.updateTrocaRealizada(realizarTroca));
      } else {
        throw new Error("Está faltando informações obrigatorias");
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
