
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

  const imageUrls = [
    'https://i.postimg.cc/CdMTkcbw/119eba72-9355-11ee-b8d6-00505601218a.jpg',
    'https://i.postimg.cc/DmCVg1Pt/119eba78-9355-11ee-b8d6-00505601218a.jpg',
    'https://i.postimg.cc/6T6JnMCK/24c70196-978a-11ee-b8d6-00505601218a.jpg',
    'https://i.postimg.cc/3Wr5mt27/24c70198-978a-11ee-b8d6-00505601218a.jpg',
    'https://i.postimg.cc/kDM3KTWm/24c7019a-978a-11ee-b8d6-00505601218a.jpg',
    'https://i.postimg.cc/yWfqP0Tz/2964b591-ea60-11ed-b736-005056013a69.jpg',
    'https://i.postimg.cc/fkWnm8Yn/3d186f4f-613e-11ee-b737-005056941658.jpg',
    'https://i.postimg.cc/7bP80K0p/3d186f51-613e-11ee-b737-005056941658.jpg',
    'https://i.postimg.cc/hhCFrV1N/520c13ef-e050-11ed-b733-005056013a69.jpg',
    'https://i.postimg.cc/vDPRz5tJ/789ad4ca-61e3-11ee-b737-005056941658.jpg',
    'https://i.postimg.cc/SjQFCgCH/7fc89a3b-c299-11ed-b733-005056013a69.jpg',
    'https://i.postimg.cc/qgBVy1yS/8b6369dc-e050-11ed-b733-005056013a69.jpg',
    'https://i.postimg.cc/HjSG2btg/f387589c-61c8-11ee-b737-005056941658.jpg'
  ];

  console.log('Downloading new boiler images...');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(boilersDir, filename);
    try {
      await downloadImage(imageUrls[i], filepath);
    } catch (err) {
      console.error(`Failed to download ${filename}: ${err.message}`);
    }
  }
};

main();
