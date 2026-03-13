
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
  const chimneyDir = path.join(publicDir, 'images', 'chimneys');
  
  ensureDir(chimneyDir);

  const imageUrls = [
    'https://i.postimg.cc/7bBhjskW/07bbbc51-aa6a-11f0-b8e1-00505601218a.jpg',
    'https://i.postimg.cc/yWfx2QKB/276cc7a1-8180-11f0-b8e0-00505601218a.jpg',
    'https://i.postimg.cc/BthbRY0d/93fd9ef7-db62-11f0-b8e1-00505601218a.jpg',
    'https://i.postimg.cc/BthbRY3n/c66d0f1e-188d-11f0-b8de-00505601218a.jpg',
    'https://i.postimg.cc/GHHtRF3C/d02e600e-0296-11f1-b8e1-00505601218a.jpg',
    'https://i.postimg.cc/XX2qtHW7/e036ae9a-7189-11e1-849c-0015174f02d0-6c1f0615-cc2c-11ea-9480-003048db7ee9.jpg',
    'https://i.postimg.cc/PN6J03Hq/f8f0aa3e-3550-11f0-b8df-00505601218a.jpg',
    'https://i.postimg.cc/kBBGCQMM/Komin-systemowy-PODPARTY-na-wspornik-IZOLOWANY-fi-120-dwuscienny-ZEWNETRZNY.jpg',
    'https://i.postimg.cc/9rr02dXV/orig.webp',
    'https://i.postimg.cc/jLL2THqx/q7tyy1mx9aumt4c19w5eku5huh0rwd4s.jpg'
  ];

  console.log('Downloading chimney images...');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(chimneyDir, filename);
    
    try {
      const urlObj = new URL(imageUrls[i]);
      await downloadImage(urlObj.href, filepath);
    } catch (err) {
      console.error(`Failed to download ${filename}: ${err.message}`);
    }
  }
};

main();
