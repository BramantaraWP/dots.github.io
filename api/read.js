export default async function handler(req, res) {
  const TG_CHANNEL_URL = "https://t.me/s/B4C4528FDACF130CF0299F43D4AD83D0";
  try {
    const response = await fetch(`${TG_CHANNEL_URL}?nocache=${Date.now()}`);
    const html = await response.text();
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ error: "Failed to read channel" });
  }
}
