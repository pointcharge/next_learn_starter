import { filterInt } from "../../../../lib/filterInt";

export default function handler(req, res) {
  try {
    res.setHeader("Cache-Control", "s-maxage=2592000");

    res.status(200).send(req.query.word + "-Ultra!");
  } catch (error) {
    console.error(error);
    res.setHeader("Cache-Control", "");
    return res.status(500).send("Internal Server Error");
  }
}
