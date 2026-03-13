
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
};

const downloadImage = async (url, filepath) => {
  try {
    console.log(`Downloading ${url} to ${filepath}...`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://yandex.ru/'
      },
      timeout: 15000
    });
    
    if (!response.ok) throw new Error(`Status ${response.status}`);
    
    const buffer = await response.arrayBuffer();
    if (buffer.byteLength < 100) throw new Error('File too small, likely not an image');
    
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`Successfully downloaded ${filepath} (${buffer.byteLength} bytes)`);
    return true;
  } catch (error) {
    console.error(`Error downloading ${url}: ${error.message}`);
    return false;
  }
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  const categories = {
    boilers: [
      'https://i.postimg.cc/CdMTkcbw/119eba72-9355-11ee-b8d6-00505601218a.jpg',
      'https://i.postimg.cc/6T6JnMCK/24c70196-978a-11ee-b8d6-00505601218a.jpg',
      'https://i.postimg.cc/3Wr5mt27/24c70198-978a-11ee-b8d6-00505601218a.jpg',
      'https://i.postimg.cc/kDM3KTWm/24c7019a-978a-11ee-b8d6-00505601218a.jpg',
      'https://i.postimg.cc/yWfqP0Tz/2964b591-ea60-11ed-b736-005056013a69.jpg',
      'https://i.postimg.cc/fkWnm8Yn/3d186f4f-613e-11ee-b737-005056941658.jpg',
      'https://i.postimg.cc/7bP80K0p/3d186f51-613e-11ee-b737-005056941658.jpg',
      'https://i.postimg.cc/hhCFrV1N/520c13ef-e050-11ed-b733-005056013a69.jpg',
      'https://i.postimg.cc/vDPRz5tJ/789ad4ca-61e3-11ee-b737-005056941658.jpg',
      'https://i.postimg.cc/SjQFCgCH/7fc89a3b-c299-11ed-b733-005056013a69.jpg'
    ],
    piping: [
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
    ],
    chimneys: [
      'https://i.postimg.cc/7bBhjskW/07bbbc51-aa6a-11f0-b8e1-00505601218a.jpg',
      'https://i.postimg.cc/yWfx2QKB/276cc7a1-8180-11f0-b8e0-00505601218a.jpg',
      'https://i.postimg.cc/BthbRY0d/93fd9ef7-db62-11f0-b8e1-00505601218a.jpg',
      'https://i.postimg.cc/BthbRY3n/c66d0f1e-188d-11f0-b8de-00505601218a.jpg',
      'https://i.postimg.cc/GHHtRF3C/d02e600e-0296-11f1-b8e1-00505601218a.jpg',
      'https://i.postimg.cc/XX2qtHW7/e036ae9a-7189-11e1-849c-0015174f02d0-6c1f0615-cc2c-11ea-9480-003048db7ee9.jpg',
      'https://i.postimg.cc/PN6J03Hq/f8f0aa3e-3550-11f0-b8df-00505601218a.jpg',
      'https://i.postimg.cc/kBBGCQMM/Komin-systemowy-PODPARTY-na-wspornik-IZOLOWANY-fi-120-dwuscienny-ZEWNETRZNY.jpg',
      'https://i.postimg.cc/9rr02dXV/orig.webp',
      'https://i.postimg.cc/jLL2THqx/q7tyy1mx9aumt4c19w5eku5huh0rwd4s.jpg'
    ],
    ups: [
      'https://74.мкэлектро.рф/images/virtuemart/product/sistema-patriot-474001811_v_8492.webp',
      'https://74.мкэлектро.рф/images/virtuemart/product/denzel-946834-5.webp',
      'https://74.мкэлектро.рф/images/virtuemart/product/generator-hyundai-dhy-6000le_v_5718.webp',
      'https://74.мкэлектро.рф/images/virtuemart/product/sistema-patriot-474001811-4_v_8647.webp',
      'https://74.мкэлектро.рф/images/virtuemart/product/chint-201720.webp',
      'https://74.мкэлектро.рф/images/virtuemart/product/stabilizator-energiya-ultra-15000va_v_7925.webp',
      'https://ir.ozone.ru/s3/multimedia-1-s/7224777316.jpg',
      'https://avatars.mds.yandex.net/get-mpic/397397/img_id2323085046811864158.png/optimize',
      'https://12v220.ru/netcat_files/data/%D0%98%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%BE%D1%80%D1%8B/Stark/Stark%20Country%205600%20INV%20Solar%20H/Stark%20Country%205600%20INV%20Solar%20H.jpg',
      'https://i.postimg.cc/cCmrYNK2/10.jpg'
    ],
    inverters: [
      'https://i.postimg.cc/Hjh9CMt5/1.jpg',
      'https://i.postimg.cc/1fVcRzWX/2.jpg',
      'https://i.postimg.cc/jLnQqj8C/3.jpg',
      'https://i.postimg.cc/3d0CrwLk/4.jpg',
      'https://i.postimg.cc/Vd0BsN7r/5.jpg',
      'https://i.postimg.cc/Tp5q2PkD/6.jpg',
      'https://i.postimg.cc/Whq6p49m/7.jpg',
      'https://i.postimg.cc/vcxL8mPz/8.jpg',
      'https://i.postimg.cc/qz6XB7mG/9.jpg',
      'https://i.postimg.cc/9rwtXfx1/10.jpg'
    ],
    elec_heat: [
      'https://i.postimg.cc/RJHRYCyq/1.jpg',
      'https://i.postimg.cc/BLypNPYF/2.jpg',
      'https://i.postimg.cc/jw9cvngy/3.jpg',
      'https://i.postimg.cc/jw9cvngz/4.jpg',
      'https://i.postimg.cc/dkX6nZH2/5.jpg',
      'https://i.postimg.cc/9w7pkXKw/6.jpg',
      'https://i.postimg.cc/RJHRYCyH/7.jpg',
      'https://i.postimg.cc/y3ZPG6tS/8.jpg',
      'https://i.postimg.cc/XBC8PNmd/9.jpg',
      'https://i.postimg.cc/wRmVrxZc/10.jpg'
    ]
  };

  for (const [category, urls] of Object.entries(categories)) {
    const dir = path.join(imagesDir, category);
    ensureDir(dir);
    for (let i = 0; i < urls.length; i++) {
      const filepath = path.join(dir, `${i + 1}.jpg`);
      await downloadImage(urls[i], filepath);
    }
  }
};

main();
