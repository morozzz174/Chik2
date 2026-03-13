
import http from 'http';

const checkHeaders = (url) => {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      console.log(`URL: ${url}`);
      console.log(`Status: ${res.statusCode}`);
      console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
      resolve();
    }).on('error', (e) => {
      console.log(`${url}: Error ${e.message}`);
      resolve();
    });
  });
};

async function main() {
  await checkHeaders('http://localhost:3000/images/solutions/econom-gaz.jpg');
}

main();
