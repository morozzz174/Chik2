
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
    https.get(url, (response) => {
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
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const boilersDir = path.join(publicDir, 'images', 'boilers');
  const pipingDir = path.join(publicDir, 'images', 'piping');

  ensureDir(boilersDir);
  ensureDir(pipingDir);

  console.log('Downloading boiler placeholders...');
  for (let i = 1; i <= 10; i++) {
    const url = `https://picsum.photos/seed/boiler${i}/800/600`;
    const filepath = path.join(boilersDir, `${i}.jpg`);
    try {
      await downloadImage(url, filepath);
    } catch (err) {
      console.error(`Failed to download ${filepath}: ${err.message}`);
    }
  }

  console.log('Downloading piping placeholders...');
  for (let i = 1; i <= 10; i++) {
    const url = `https://picsum.photos/seed/piping${i}/800/600`;
    const filepath = path.join(pipingDir, `${i}.jpg`);
    try {
      await downloadImage(url, filepath);
    } catch (err) {
      console.error(`Failed to download ${filepath}: ${err.message}`);
    }
  }
};

main();
