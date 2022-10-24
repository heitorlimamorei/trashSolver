import type { NextApiRequest, NextApiResponse } from "next";
import historicoService from "../../../../../backEnd/services/historico.service";
interface evento {
    pontoId:string;
    itemId?:string;
    trocaId?:string;
    tipo:string;
    realizadoPor:string;
    data?: any;
}
export default async function HisoryController(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await historicoService.getHistorico(req.query.id));
    } else if (req.method === "POST") {
        const evento:evento = req.body
        if(
            evento.pontoId,
            evento.realizadoPor,
            evento.tipo,
            (
                evento.itemId || evento.trocaId
            )  
        ){
            res.status(200).json(await historicoService.createEvento(evento));
        } else {
            throw new Error('Body da req não está no formato adequado!')
        }   
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
