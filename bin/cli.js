#!/usr/bin/env node

require("../util/ensureBin")();
const fs = require("fs");
const path = require("path");
const { ensureDir } = require("../util/ensureDir");
const { binFiles } = require("../util/getBinFiles");

const shebangText = "#!/usr/bin/env node\n";

function generateBinCliFiles(files) {
  files.forEach((file) => {
    try {
      const filePath = path.join(process.cwd(), file);

      // Ensure the directory exists first
      ensureDir(path.dirname(filePath));

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, shebangText, "utf-8");
        console.info(`File: "${file}" generated.`);
      } else {
        console.info(`File: "${file}" already exists, skipping.`);
      }
    } catch (error) {
      console.error(`Error writing file: ${file}`, error);
    }
  });
}

generateBinCliFiles(binFiles);
