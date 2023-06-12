const readline = require('readline');

const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

iface.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  iface.close();
});

iface.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
