export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=2592000");
  return res.status(200).send(Math.LOG2E);
}
