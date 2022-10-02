import type { NextApiRequest, NextApiResponse } from "next";
import itemServices from "../../../../../backEnd/services/item.service";
export default async function ItemControllerId(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      console.log(req.query.id, req.query.item)
      res.status(200).json(await itemServices.getItemById(req.query.id, req.query.item));
    } else if ( req.method === "DELETE") {
        res.status(200).json(await itemServices.deleteItem(req.query.id, req.query.item));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
