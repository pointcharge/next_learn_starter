import { filterInt } from "../../../../lib/filterInt";

export default function handler(req, res) {
  try {
    res.setHeader("Cache-Control", "s-maxage=2592000");

    const number = filterInt(req.query.number);

    if (isNaN(number)) {
      return res
        .status(400)
        .send(`Cannot convert ${req.query.number} into an integer`);
    }

    res.status(200).send(Number.isInteger(Math.log2(number)));
  } catch (error) {
    console.error(error);
    res.setHeader("Cache-Control", "");
    return res.status(500).send("Internal Server Error");
  }
}
