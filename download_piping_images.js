
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
  const pipingDir = path.join(publicDir, 'images', 'piping');
  
  ensureDir(pipingDir);

  const imageUrls = [
    'https://i.postimg.cc/cgykxBN0/18627c5d-3012-11f0-b8df-00505601218a.jpg',
    'https://i.postimg.cc/HcDvY9Cr/24582b3d-948e-11f0-b8e1-00505601218a.jpg',
    'https://i.postimg.cc/DWbY3YRK/24eb7fb1-9352-11ed-b733-005056013a69.jpg',
    'https://i.postimg.cc/Z9yDzDXS/3d6e057b-7ed3-11ee-b737-005056941658.jpg',
    'https://i.postimg.cc/WDJfcfxR/3e6963d0-fae8-11ed-b736-005056013a69.jpg',
    'https://i.postimg.cc/jw03x4Y9/55a17847-270d-11ef-b8d8-00505601218a.jpg',
    'https://i.postimg.cc/k63YJvPz/92a43d2c-7b17-11e9-9e72-ac162d7b6f40.jpg',
    'https://i.postimg.cc/HcwZV8pY/da7ed28a-0581-11f0-b8de-00505601218a.jpg',
    'https://i.postimg.cc/476LmHJ4/dc8bdfd4-d365-11f0-b8e1-00505601218a.jpg',
    'https://i.postimg.cc/62rjy498/ea016acd-4150-11f0-b8df-00505601218a.jpg'
  ];

  console.log('Downloading piping images...');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(pipingDir, filename);
    
    try {
      const urlObj = new URL(imageUrls[i]);
      await downloadImage(urlObj.href, filepath);
    } catch (err) {
      console.error(`Failed to download ${filename}: ${err.message}`);
    }
  }
};

main();
