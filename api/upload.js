export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const BOT_TOKEN = process.env.TG_BOT_TOKEN; // Ambil dari Env Vercel
  const CHAT_ID = process.env.TG_CHAT_ID;    // Ambil dari Env Vercel

  try {
    // Teruskan body dari frontend langsung ke Telegram
    // Jika ada file (multipart), kita perlu handle lebih kompleks, 
    // tapi untuk simpelnya kita asumsikan JSON atau redirect form.
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        ...req.body
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
}
