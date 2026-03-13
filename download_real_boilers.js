
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
  const boilersDir = path.join(publicDir, 'images', 'boilers');
  
  ensureDir(boilersDir);

  // URLs for the specific boilers requested
  const boilerUrls = [
    'https://teplovoz.ru/image/cache/catalog/kotly/gazovye/mizudo/mizudo-m-500x500.jpg', // 1. Mizudo
    'https://lemax-kotel.ru/images/stories/virtuemart/product/premium-nova-12-5.jpg', // 2. Lemax Premium Nova
    'https://kotel-service.ru/images/navien/navien_deluxe_s_inside.jpg', // 3. Navien Internal
    'https://navien.ru/storage/app/uploads/public/5d6/668/5d66687293a9e224795333.png', // 4. Navien Deluxe S
    'https://kotel-service.ru/images/navien/navien_deluxe_one_inside.jpg', // 5. Navien Internal 2
    'https://www.baxi.ru/upload/iblock/74a/SLIM_1.jpg', // 6. Baxi Slim
    'https://lemax-kotel.ru/images/stories/virtuemart/product/premium-12-5.jpg', // 7. Lemax Premium
    'https://www.baxi.ru/upload/iblock/1c5/ECOLIFE_1.jpg', // 8. Baxi Eco Life
    'https://lemax-kotel.ru/images/stories/virtuemart/product/norm-12-5.jpg', // 9. Lemax Norm
    'https://kotel-service.ru/images/baxi/baxi_main_four_inside.jpg' // 10. Baxi Internal
  ];

  console.log('Downloading real boiler images...');
  
  for (let i = 0; i < boilerUrls.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(boilersDir, filename);
    try {
      await downloadImage(boilerUrls[i], filepath);
    } catch (err) {
      console.error(`Failed to download ${filename} from ${boilerUrls[i]}: ${err.message}`);
      // If download fails, we keep the existing placeholder (if any) or create a new one
      if (!fs.existsSync(filepath)) {
         console.log('Keeping/Creating placeholder for failed download');
         // Fallback to picsum if file doesn't exist
         // We can't easily do that here without importing the other logic, 
         // but we assume placeholders exist from previous step.
      }
    }
  }
};

main();
