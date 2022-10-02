import type { NextApiRequest, NextApiResponse } from "next";
import itemServices from "../../../../../backEnd/services/item.service";
export default async function ItemController(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await itemServices.getItems(req.query.id));
    } else if (req.method === "POST") {
        res.status(200).json(await itemServices.createItem(req.body));
    } else if (req.method === "PUT") {
        res.status(200).json(await itemServices.updateItem(req.body));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
