
import fs from 'fs';
import https from 'https';

const url = 'https://i.postimg.cc/FY9p1h38/econom-gaz.jpg';
const filepath = 'test_image.jpg';

const file = fs.createWriteStream(filepath);
https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded');
  });
});
