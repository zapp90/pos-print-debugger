const fs = require('fs');
const chalk = require('chalk');

function parseESC_POS(buffer) {
  let result = '';
  for (let i = 0; i < buffer.length; i++) {
    const byte = buffer[i];

    if (byte === 0x1B && buffer[i + 1] === 0x40) {
      result += chalk.cyan('[Initialize Printer]\n');
      i++;
    } else if (byte === 0x1B && buffer[i + 1] === 0x21) {
      result += chalk.yellow('[Set Print Mode: ') + buffer[i + 2] + chalk.yellow(']\n');
      i += 2;
    } else if (byte === 0x0A) {
      result += '\n';
    } else if (byte >= 0x20 && byte <= 0x7E) {
      result += String.fromCharCode(byte);
    } else {
      result += chalk.gray(`[0x${byte.toString(16)}]`);
    }
  }

  return result;
}

function run(file) {
  let input;

  if (file) {
    input = fs.readFileSync(file);
  } else {
    console.log(chalk.red('Please provide a path to a sample file.\nExample: node index.js ./samples/sample1.txt'));
    process.exit(1);
  }

  const buffer = Buffer.from(input.toString().replace(/\\x/g, '').match(/.{1,2}/g).map(h => parseInt(h, 16)));
  const output = parseESC_POS(buffer);
  console.log('\nParsed Output:\n');
  console.log(output);
}

// CLI arg
const fileArg = process.argv[2];
run(fileArg);
