import type { NextApiRequest, NextApiResponse } from "next";
import realizarTrocaService from "../../../backEnd/services/trocaRealizada.service";
export default async function TrocaControllerId(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await realizarTrocaService.getTrocaRealizadaById(req.query.id));
    } else if ( req.method === "DELETE") {
        res.status(200).json(await realizarTrocaService.deleteTrocaRealizada(req.query.id));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
