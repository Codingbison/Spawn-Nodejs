const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assests/Readme.txt", "UTF-8");

readStream.pipe(writeStream);