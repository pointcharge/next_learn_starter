export default function handler(req, res) {
  const time = new Date().toUTCString();
  res.status(200).json({ time });
}
