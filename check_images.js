
import fs from 'fs';
import path from 'path';

const check = (dir) => {
  if (!fs.existsSync(dir)) {
    console.log(`${dir} does not exist`);
    return;
  }
  const files = fs.readdirSync(dir);
  console.log(`Contents of ${dir}:`);
  files.forEach(file => {
    const stats = fs.statSync(path.join(dir, file));
    console.log(`${file}: ${stats.size} bytes`);
  });
};

check('public/images/solutions');
check('public/images/boilers');
check('public/images/piping');
check('public/images/chimneys');
check('public/images/ups');
