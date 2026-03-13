
import https from 'https';
import fs from 'fs';

const url = 'https://i.postimg.cc/21zG3Cht/premium-gaz.jpg';
const file = fs.createWriteStream('test_download.jpg');

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    const buffer = fs.readFileSync('test_download.jpg');
    console.log('Size:', buffer.length);
    console.log('Hex:', buffer.slice(0, 20).toString('hex'));
  });
});
