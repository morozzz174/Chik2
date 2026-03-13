
import fs from 'fs';
import fetch from 'node-fetch';

const url = 'https://i.postimg.cc/FY9p1h38/econom-gaz.jpg';
const filepath = 'test_fetch.jpg';

fetch(url)
  .then(res => res.buffer())
  .then(buffer => {
    fs.writeFileSync(filepath, buffer);
    console.log('Downloaded');
  })
  .catch(err => console.error(err));
