
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
        resolve();
      });
    });
    request.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
    request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error('Timeout'));
    });
  });
};

const copyFile = (src, dest) => {
  try {
    fs.copyFileSync(src, dest);
  } catch (err) {
    console.error(`Error copying to ${dest}:`, err);
  }
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const boilersDir = path.join(publicDir, 'images', 'boilers');
  const pipingDir = path.join(publicDir, 'images', 'piping');

  ensureDir(boilersDir);
  ensureDir(pipingDir);

  const boilerPlaceholder = path.join(publicDir, 'boiler_base.jpg');
  const pipingPlaceholder = path.join(publicDir, 'piping_base.jpg');

  console.log('Downloading base images...');
  
  // Use reliable placeholder service
  try {
      await downloadImage('https://placehold.co/800x600/0b2a4a/white.jpg?text=Boiler+Equipment', boilerPlaceholder);
      console.log('Downloaded boiler base');
      
      await downloadImage('https://placehold.co/800x600/b22222/white.jpg?text=Piping+System', pipingPlaceholder);
      console.log('Downloaded piping base');

      console.log('Duplicating images...');
      for (let i = 1; i <= 10; i++) {
        copyFile(boilerPlaceholder, path.join(boilersDir, `${i}.jpg`));
        copyFile(pipingPlaceholder, path.join(pipingDir, `${i}.jpg`));
      }

      // Cleanup
      if (fs.existsSync(boilerPlaceholder)) fs.unlinkSync(boilerPlaceholder);
      if (fs.existsSync(pipingPlaceholder)) fs.unlinkSync(pipingPlaceholder);
      
      console.log('Done!');
  } catch (error) {
      console.error('Fatal error:', error);
      process.exit(1);
  }
};

main();
