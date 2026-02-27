import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      
      if (data.href) {
        const fileRes = await fetch(data.href);
        if (!fileRes.ok) throw new Error(`File download error: ${fileRes.status}`);
        
        const buffer = await fileRes.arrayBuffer();
        fs.writeFileSync(path.join(__dirname, 'public', `cert${i + 1}.pdf`), Buffer.from(buffer));
        console.log(`Downloaded cert${i + 1}.pdf (${buffer.byteLength} bytes)`);
      }
    } catch (err) {
      console.error(`Failed to download ${urls[i]}:`, err.message);
    }
  }
}

download();
