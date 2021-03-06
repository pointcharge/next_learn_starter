export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59");
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  res.send({ minutes, seconds });
}
