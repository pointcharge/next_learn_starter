export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=50");
  res.status(200).json({ name: "John Doe" });
}
