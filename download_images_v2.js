
import fs from 'fs';
import path from 'path';

const boilerImages = [
  'https://avatars.mds.yandex.net/get-mpic/5235932/img_id3799636289947963339.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5234881/img_id5380536769260799403.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/1862729/img_id4673620392942971337.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5359966/img_id6329063255681969242.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/4447320/img_id139265912803874332.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5236263/img_id3392398547268832986.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/4398366/img_id7537633276840742464.jpeg/orig', // Fixed URL from previous attempt if it was wrong? No, let's stick to the list I have.
  'https://avatars.mds.yandex.net/get-mpic/5232809/img_id2738729357024329380.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5221446/img_id6450097728328226027.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5253133/img_id2230497672283033230.jpeg/orig'
];

// Re-check the 7th URL for boilers. In previous `constants.tsx` it was ...4398366/img_id3710777590559644907.jpeg/orig
// In my previous `download_images.js` I used ...4398366/img_id3710777590559644907.jpeg/orig
// Wait, looking at the diff in Step 61, the 7th image was ...4398366/img_id3710777590559644907.jpeg/orig
// Let's use the exact list from Step 47 (constants.tsx before edit).

const boilerImagesCorrect = [
  'https://avatars.mds.yandex.net/get-mpic/5235932/img_id3799636289947963339.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5234881/img_id5380536769260799403.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/1862729/img_id4673620392942971337.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5359966/img_id6329063255681969242.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/4447320/img_id139265912803874332.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5236263/img_id3392398547268832986.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/4398366/img_id3710777590559644907.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5232809/img_id2738729357024329380.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5221446/img_id6450097728328226027.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5253133/img_id2230497672283033230.jpeg/orig'
];

const pipingImages = [
  'https://avatars.mds.yandex.net/get-mpic/5232560/img_id7091932333036687292.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5313289/img_id5327663242082260637.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/4355026/img_id3393523675037307662.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5221446/img_id632831846553253773.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5234479/img_id4024367332306786807.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5277101/img_id3397980860366228308.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/4409638/img_id7537633276840742464.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5236063/img_id3009559339327599294.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5255629/img_id2233290632336332332.jpeg/orig',
  'https://avatars.mds.yandex.net/get-mpic/5216968/img_id6350320473200799446.jpeg/orig'
];

const downloadImage = async (url, filepath) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`Downloaded ${filepath} (${buffer.byteLength} bytes)`);
  } catch (error) {
    console.error(`Error downloading ${url}: ${error.message}`);
  }
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const boilersDir = path.join(publicDir, 'images', 'boilers');
  const pipingDir = path.join(publicDir, 'images', 'piping');

  ensureDir(boilersDir);
  ensureDir(pipingDir);

  console.log('Downloading boiler images...');
  for (let i = 0; i < boilerImagesCorrect.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(boilersDir, filename);
    await downloadImage(boilerImagesCorrect[i], filepath);
  }

  console.log('Downloading piping images...');
  for (let i = 0; i < pipingImages.length; i++) {
    const filename = `${i + 1}.jpg`;
    const filepath = path.join(pipingDir, filename);
    await downloadImage(pipingImages[i], filepath);
  }
};

main();
