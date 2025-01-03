const fs = require("fs");

module.exports = function readDirectory(dirPath) {
  const content = fs.readdirSync(dirPath);
  return content;
}