
import fs from 'fs';
import axios from 'axios';

const url = 'https://i.postimg.cc/FY9p1h38/econom-gaz.jpg';
const filepath = 'test_axios.jpg';

axios({
  method: 'get',
  url: url,
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream(filepath));
    console.log('Downloaded');
  })
  .catch(function (error) {
    console.log(error);
  });
