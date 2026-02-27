import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontUrl = 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Regular.ttf';
const fontPath = path.join(__dirname, 'Roboto-Regular.ttf');

async function download() {
  const res = await fetch(fontUrl);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(fontPath, Buffer.from(buffer));
  console.log('Font downloaded');
}

download();
