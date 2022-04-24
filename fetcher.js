const request = require("request");
const fs = require("fs");

const pageFetcher = (url, filepath) => {
  request(url, (error, response, data) => {
    fs.writeFile("index.html", data, err => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Downloaded and saved ${data.length} bytes to ${filepath}`);
    });
  });
};

const [ url, filepath ] = process.argv.slice(2);
pageFetcher(url, filepath);
