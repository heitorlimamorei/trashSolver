import type { NextApiRequest, NextApiResponse } from "next";
import trocaService from "../../../backEnd/services/troca.service";
export default async function TrocaControllerId(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await trocaService.getTrocaById(req.query.id));
    } else if ( req.method === "DELETE") {
        res.status(200).json(await trocaService.deleteTroca(req.query.id));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
