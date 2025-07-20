// api/index.js
import express from 'express';
import cors from 'cors';
import { igdl, youtube, fbdown } from 'btch-downloader';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'No URL provided' });

  try {
    let result;
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      result = await youtube(url);
    } else if (url.includes('facebook.com') || url.includes('fb.com')) {
      result = await fbdown(url);
    } else if (url.includes('instagram.com')) {
      result = await igdl(url);
    } else {
      return res.status(400).json({ error: 'Unsupported URL' });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Download failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
