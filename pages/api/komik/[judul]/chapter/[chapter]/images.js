// pages/api/komik/[komik]/[chapter]/images.js
import { getChapterImages } from '../../../../../../function/index'; // sesuaikan dengan lokasi function

export default async function handler(req, res) {
  const {
    query: { judul, chapter },
    method,
  } = req;

  if (method === 'GET') {
    try {
      const imageUrls = await getChapterImages(judul, chapter);
      const protocol = req.headers['x-forwarded-proto'] || 'http'; // HTTP atau HTTPS
      const host = req.headers['host']; // Host, termasuk domain atau localhost dengan port
      const baseUrl = `${protocol}://${host}`; // URL lengkap

      const imageLinks = imageUrls.map((imgUrl, index) => {
        return `${baseUrl}/api/komik/images/${judul}/${chapter}/${index + 1}`;
      });

      res.status(200).json(imageLinks);
    } catch (error) {
      console.error('Error fetching chapter images:', error);
      res.status(500).send('Failed to fetch chapter images.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}