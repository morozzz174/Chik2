
import fs from 'fs';

const checkHeader = (filepath) => {
  if (!fs.existsSync(filepath)) return 'missing';
  const buffer = Buffer.alloc(4);
  const fd = fs.openSync(filepath, 'r');
  fs.readSync(fd, buffer, 0, 4, 0);
  fs.closeSync(fd);
  
  // JPEG: FF D8 FF
  if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) return 'jpeg';
  // PNG: 89 50 4E 47
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) return 'png';
  // WEBP: 52 49 46 46 (RIFF) ... 57 45 42 50 (WEBP)
  if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46) return 'webp/riff';
  
  return 'unknown: ' + buffer.toString('hex');
};

console.log('boilers/1.jpg:', checkHeader('public/images/boilers/1.jpg'));
console.log('piping/1.jpg:', checkHeader('public/images/piping/1.jpg'));
console.log('chimneys/1.jpg:', checkHeader('public/images/chimneys/1.jpg'));
console.log('ups/1.jpg:', checkHeader('public/images/ups/1.jpg'));
