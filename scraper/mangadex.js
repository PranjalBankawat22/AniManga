const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';
const title = 'Kanojyo to Himitsu to Koimoyou';

async function fetchManga() {
    try {
        const resp = await axios({
            method: 'GET',
            url: `${baseUrl}/manga`,
            params: {
                title: title
            }
        });

        console.log(resp);
    } catch (error) {
        console.error(error);
    }
}

fetchManga();
