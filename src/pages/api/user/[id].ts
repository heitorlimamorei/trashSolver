import type { NextApiRequest, NextApiResponse } from "next";
import userService from "../../../backEnd/services/user.service";
export default async function User(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await userService.getUserById(req.query.id));
    } else if ( req.method === "DELETE") {
        res.status(200).json(await userService.deleteUser(req.query.id));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
