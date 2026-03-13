
import fs from 'fs';
import path from 'path';
import https from 'https';

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const request = https.get(url, (response) => {
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
  });
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const boilersDir = path.join(publicDir, 'images', 'boilers');
  
  ensureDir(boilersDir);

  const boilers = [
    { name: 'Mizudo', filename: '1.jpg' },
    { name: 'Lemax Premium', filename: '2.jpg' },
    { name: 'Navien Internal', filename: '3.jpg' },
    { name: 'Navien Deluxe S', filename: '4.jpg' },
    { name: 'Navien Internal 2', filename: '5.jpg' },
    { name: 'Baxi Slim', filename: '6.jpg' },
    { name: 'Lemax Premium Side', filename: '7.jpg' },
    { name: 'Baxi Eco Life', filename: '8.jpg' },
    { name: 'Lemax Norm', filename: '9.jpg' },
    { name: 'Baxi Internal', filename: '10.jpg' }
  ];

  console.log('Downloading descriptive placeholders...');
  
  for (const boiler of boilers) {
    const url = `https://placehold.co/800x600/0b2a4a/white.jpg?text=${encodeURIComponent(boiler.name)}`;
    const filepath = path.join(boilersDir, boiler.filename);
    try {
      await downloadImage(url, filepath);
    } catch (err) {
      console.error(`Failed to download ${boiler.name}: ${err.message}`);
    }
  }
};

main();
