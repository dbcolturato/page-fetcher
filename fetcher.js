const request = require('request');
const fs = require('fs');
const arg = process.argv;
const localPath = arg[3];


request(arg[2], (error, response, body) => {
  if (error) {
    console.log("An error occurred:");
    console.log(error);
    process.exit();
  }
  fs.writeFile(localPath, body, 'utf8', (error) => {
    if (error) {
      console.log("The path doesn't exist.");
      process.exit();
    }
  });
  if (response.statusCode === 200) {
  fs.writeFile(arg[3], body, () => {
    // const stats = fs.statSync(arg[3]);
    // const fileSize = stats.size;
    // console.log("Downloaded and saved " + fileSize + " bytes to " + arg[3]);
    console.log("Downloaded and saved " + body.length + " bytes to " + arg[3]);
  });
  } else {
    console.log("An error occurred:");
    console.log(response.statusCode);
    process.exit();
  }
 
});

