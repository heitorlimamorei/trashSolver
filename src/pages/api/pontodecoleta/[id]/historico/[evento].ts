import type { NextApiRequest, NextApiResponse } from "next";
import historicoService from "../../../../../backEnd/services/historico.service";
export default async function HisoryController(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await historicoService.getEventoById(req.query.id, req.query.evento));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
