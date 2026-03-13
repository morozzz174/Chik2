
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
  const upsDir = path.join(publicDir, 'images', 'ups');
  
  ensureDir(upsDir);

  const missingIndices = [3, 4, 5, 6];
  const placeholderUrl = 'https://placehold.co/800x600/b22222/white.jpg?text=UPS+System';

  console.log('Downloading placeholders for missing UPS images...');
  
  for (const i of missingIndices) {
    const filename = `${i}.jpg`;
    const filepath = path.join(upsDir, filename);
    try {
      await downloadImage(placeholderUrl, filepath);
    } catch (err) {
      console.error(`Failed to download placeholder for ${filename}: ${err.message}`);
    }
  }
};

main();
