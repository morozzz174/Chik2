
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
      // Handle redirects
      if (response.statusCode === 302 || response.statusCode === 301) {
        const newUrl = response.headers.location;
        console.log(`Redirecting to ${newUrl}`);
        downloadImage(newUrl, filepath).then(resolve).catch(reject);
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
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const copyFile = (src, dest) => {
  fs.copyFileSync(src, dest);
  console.log(`Copied to ${dest}`);
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const boilersDir = path.join(publicDir, 'images', 'boilers');
  const pipingDir = path.join(publicDir, 'images', 'piping');

  ensureDir(boilersDir);
  ensureDir(pipingDir);

  const boilerPlaceholder = path.join(publicDir, 'boiler_placeholder.jpg');
  const pipingPlaceholder = path.join(publicDir, 'piping_placeholder.jpg');

  // Download base placeholders
  console.log('Downloading base placeholders...');
  try {
    await downloadImage('https://picsum.photos/seed/boiler/800/600', boilerPlaceholder);
    await downloadImage('https://picsum.photos/seed/piping/800/600', pipingPlaceholder);

    // Copy to 1..10
    console.log('Creating boiler images...');
    for (let i = 1; i <= 10; i++) {
      copyFile(boilerPlaceholder, path.join(boilersDir, `${i}.jpg`));
    }

    console.log('Creating piping images...');
    for (let i = 1; i <= 10; i++) {
      copyFile(pipingPlaceholder, path.join(pipingDir, `${i}.jpg`));
    }

    // Clean up base placeholders
    fs.unlinkSync(boilerPlaceholder);
    fs.unlinkSync(pipingPlaceholder);
    console.log('Cleanup complete');
  } catch (err) {
    console.error('Error:', err);
  }
};

main();
