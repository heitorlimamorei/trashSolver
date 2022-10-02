import type { NextApiRequest, NextApiResponse } from "next";
import pontoService from "../../../../backEnd/services/ponto.service";
export default async function TrocaControllerId(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await pontoService.getPontoById(req.query.id));
    } else if ( req.method === "DELETE") {
        res.status(200).json(await pontoService.deletePonto(req.query.id));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
