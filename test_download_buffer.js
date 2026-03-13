
import fs from 'fs';
import https from 'https';

const url = 'https://i.postimg.cc/FY9p1h38/econom-gaz.jpg';
const filepath = 'test_image_buffer.jpg';

https.get(url, (response) => {
  const chunks = [];
  response.on('data', (chunk) => {
    chunks.push(chunk);
  });
  response.on('end', () => {
    const buffer = Buffer.concat(chunks);
    fs.writeFileSync(filepath, buffer);
    console.log('Downloaded');
  });
});
