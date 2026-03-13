
import fs from 'fs';
import path from 'path';
import https from 'https';
import { URL } from 'url';

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filepath}`);
        resolve();
      });
    });
    request.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
    request.setTimeout(15000, () => {
        request.destroy();
        reject(new Error('Timeout'));
    });
  });
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const upsDir = path.join(publicDir, 'images', 'ups');
  
  ensureDir(upsDir);

  const imageUrls = [
    'https://74.мкэлектро.рф/images/virtuemart/product/sistema-patriot-474001811_v_8492.webp',
    'https://74.мкэлектро.рф/images/virtuemart/product/denzel-946834-5.webp',
    'https://74.мкэлектро.рф/images/virtuemart/product/generator-hyundai-dhy-6000le_v_5718.webp',
    'https://74.мкэлектро.рф/images/virtuemart/product/sistema-patriot-474001811-4_v_8647.webp',
    'https://74.мкэлектро.рф/images/virtuemart/product/chint-201720.webp',
    'https://74.мкэлектро.рф/images/virtuemart/product/stabilizator-energiya-ultra-15000va_v_7925.webp',
    'https://ir.ozone.ru/s3/multimedia-1-s/7224777316.jpg',
    'https://avatars.mds.yandex.net/get-mpic/397397/img_id2323085046811864158.png/optimize',
    'https://12v220.ru/netcat_files/data/%D0%98%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%BE%D1%80%D1%8B/Stark/Stark%20Country%205600%20INV%20Solar%20H/Stark%20Country%205600%20INV%20Solar%20H.jpg',
    'https://12v220.ru/netcat_files/168/207/CTG_45ISS.jpg',
    'https://12v220.ru/netcat_files/168/207/LG33YD.jpg',
    'https://12v220.ru/netcat_files/data/%D0%A1%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D1%8B/%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D1%82%D0%B5%D1%85/%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D1%82%D0%B5%D1%85%20Universal%207500/%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D1%82%D0%B5%D1%85%20Universal%207500.jpg',
    'https://12v220.ru/netcat_files/data/%D0%A1%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D1%8B/%D0%92%D0%BE%D0%BB%D1%8C%D1%82%20engineering/%D0%92%D0%BE%D0%BB%D1%8C%D1%82%20engineering%20%D0%90%D0%BC%D0%BF%D0%B5%D1%80%20%D0%AD%2012%2D1%2D25%20v2.1/%D0%92%D0%BE%D0%BB%D1%8C%D1%82%20engineering%20%D0%90%D0%BC%D0%BF%D0%B5%D1%80%20%D0%AD%2012%2D1%2D25%20v2.1.jpg'
  ];

  console.log('Downloading UPS images...');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(upsDir, filename);
    
    try {
      // Use URL object to handle encoding automatically
      const urlObj = new URL(imageUrls[i]);
      await downloadImage(urlObj.href, filepath);
    } catch (err) {
      console.error(`Failed to download ${filename}: ${err.message}`);
    }
  }
};

main();
