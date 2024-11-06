const { bin: binObj } = require(process.cwd() + "/package.json");

if (!binObj) {
  console.error('No "bin" field found in package.json.');
  process.exit(1);
}

const binFiles = Object.values(binObj).filter((file) =>
  /^bin(?:\/[\w-]+)*\/[\w-]+\.js$/.test(file)
);

if (binFiles.length === 0) {
  console.log('No valid JavaScript files found in "bin" field.');
  process.exit(0);
}

module.exports = { binFiles };
