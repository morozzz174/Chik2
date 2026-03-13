
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
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
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
  });
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const solutionsDir = path.join(publicDir, 'images', 'solutions');
  
  ensureDir(solutionsDir);

  const images = {
    'econom-gaz.jpg': 'https://i.postimg.cc/FY9p1h38/econom-gaz.jpg',
    'standart-gaz.jpg': 'https://i.postimg.cc/fVwCkMm1/standart-gaz.jpg',
    'premium-gaz.jpg': 'https://i.postimg.cc/21zG3Cht/premium-gaz.jpg',
    'hitech-gaz.jpg': 'https://i.postimg.cc/XrVLXndz/hitech-gaz.jpg',
    'commerce-gaz.jpg': 'https://i.postimg.cc/CRF7dwk7/commerce-gaz.jpg',
    'ng-eco.jpg': 'https://i.postimg.cc/wyvS15XG/1-resenie-ekonom.jpg',
    'ng-std.jpg': 'https://i.postimg.cc/5Hph9KCR/2-resenie-standart.jpg',
    'ng-prm.jpg': 'https://i.postimg.cc/7CXFPt2b/3-resenie-premium.jpg',
    'ng-htech.jpg': 'https://i.postimg.cc/wtFCx4mP/4-resenie-najtek.jpg',
    'ng-ind.jpg': 'https://i.postimg.cc/PLKgfVwm/5-resenie-prom.jpg'
  };

  for (const [filename, url] of Object.entries(images)) {
    const filepath = path.join(solutionsDir, filename);
    try {
      await downloadImage(url, filepath);
    } catch (err) {
      console.error(`Failed to download ${filename}: ${err.message}`);
    }
  }
};

main();
