const { exec } = require("child_process");
const execFileName = process.argv[2];

exec(`node ./${execFileName}/${execFileName}.js`, (err, stdout) => {
  console.log(stdout)
});