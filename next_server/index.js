const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Route to fetch manga data
app.get('/manga', async (req, res) => {
  try {
    const title = 'Kanojyo to Himitsu to Koimoyou';
    const axios = require('axios');

    const baseUrl = 'https://api.mangadex.org';

    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: {
            title: title
        }
    });

    console.log(resp.data.data.map(manga => manga.id));
    res.send(resp.data.data.map(manga => manga.id))
  } catch (error) {
    // Handle errors
    console.error('Error fetching manga:', error);
    res.status(500).json({ error: 'Failed to fetch manga' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
