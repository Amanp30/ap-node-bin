# ap-node-bin

ap-node-bin is a simple Node.js utility that makes it easy to manage and automate your command-line interfaces (CLI) directly from the bin field of your package.json. It automatically ensures that all CLI files are correctly created with the required shebang line (#!/usr/bin/env node) and placed in the appropriate directory structure.

## Installation

```
npm i -g ap-node-bin
```

## Usage

You just need to add all commands to bin field in package.json like below.

```
"bin":{
    "your-command-1":"bin/your-command-file1.js",
    "your-command-2":"bin/your-command-file2.js",
}
```

## Run command in terminal

```
npx ap-node-bin
```
