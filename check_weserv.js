
import http from 'http';

const checkUrl = (url) => {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      console.log(`${url}: ${res.statusCode} ${res.headers['content-type']}`);
      resolve();
    }).on('error', (e) => {
      console.log(`${url}: Error ${e.message}`);
      resolve();
    });
  });
};

async function main() {
  await checkUrl('http://localhost:3000/images/solutions/econom-gaz.jpg');
  await checkUrl('http://localhost:3000/images/boilers/1.jpg');
}

main();
