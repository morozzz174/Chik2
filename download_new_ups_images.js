
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
    'https://i.postimg.cc/7bxRRXPv/1.jpg',
    'https://i.postimg.cc/grY774zC/2.jpg',
    'https://i.postimg.cc/py2SSkWc/3.jpg',
    'https://i.postimg.cc/z3JQQpzM/4.jpg',
    'https://i.postimg.cc/5jxrrp4r/5.jpg',
    'https://i.postimg.cc/mhbnnVLd/6-1.jpg',
    'https://i.postimg.cc/Wt2yySNX/7.jpg',
    'https://i.postimg.cc/2L8XBj9Q/8.jpg',
    'https://i.postimg.cc/tnCmVRvh/9.jpg'
  ];

  console.log('Downloading new UPS images...');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(upsDir, filename);
    
    try {
      const urlObj = new URL(imageUrls[i]);
      await downloadImage(urlObj.href, filepath);
    } catch (err) {
      console.error(`Failed to download ${filename}: ${err.message}`);
    }
  }
};

main();
