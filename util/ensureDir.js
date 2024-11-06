const fs = require("fs");

function ensureDir(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

exports.ensureDir = ensureDir;
