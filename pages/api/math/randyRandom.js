export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=900");
  return res.status(200).send(Math.random());
}
