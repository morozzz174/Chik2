const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://disk.yandex.ru/i/sHxlXkW90cXcvQ',
  'https://disk.yandex.ru/i/Pf1_m3YqZ26Cfw',
  'https://disk.yandex.ru/i/_w987ePHZmAR9A',
  'https://disk.yandex.ru/i/8-6wp4N2Hscv7g',
  'https://disk.yandex.ru/i/kwINMBQJ6Zl2TA',
  'https://disk.yandex.ru/i/_SnD_5jPt-xkOg',
  'https://disk.yandex.ru/i/_4xPi1yrHwpPww',
  'https://disk.yandex.ru/i/KCBrt9PmBJTCbQ',
  'https://disk.yandex.ru/i/Yu-HVpadXNtvAA'
];

async function download() {
  for (let i = 0; i < urls.length; i++) {
    const pubKey = encodeURIComponent(urls[i]);
    const apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${pubKey}`;
    
    try {
      const downloadUrl = await new Promise((resolve, reject) => {
        https.get(apiUrl, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              resolve(JSON.parse(data).href);
            } catch (e) {
              reject(e);
            }
          });
        }).on('error', reject);
      });

      if (downloadUrl) {
        await new Promise((resolve, reject) => {
          const file = fs.createWriteStream(path.join(__dirname, 'public', `cert${i + 1}.pdf`));
          https.get(downloadUrl, (res) => {
            res.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve();
            });
          }).on('error', reject);
        });
        console.log(`Downloaded cert${i + 1}.pdf`);
      }
    } catch (err) {
      console.error(`Failed to download ${urls[i]}:`, err.message);
    }
  }
}

download();
