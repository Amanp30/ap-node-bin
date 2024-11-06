const path = require("path");
const { ensureDir } = require("./ensureDir");

function ensureBinDir() {
  const binDir = path.resolve(process.cwd(), "bin");
  ensureDir(binDir);
}

module.exports = ensureBinDir;
