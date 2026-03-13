
import fs from 'fs';
import axios from 'axios';

const url = 'https://picsum.photos/200/300';
const filepath = 'test_picsum.jpg';

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
