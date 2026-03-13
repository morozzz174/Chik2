
import fs from 'fs';
import path from 'path';

const fileName = process.argv[2] || 'public/images/boilers/1.jpg';
const filePath = path.join(process.cwd(), fileName);
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}
const buffer = fs.readFileSync(filePath);
console.log(`Size: ${buffer.length} bytes`);
console.log(buffer.slice(0, 100).toString('hex'));
console.log(buffer.slice(0, 100).toString('utf8'));
