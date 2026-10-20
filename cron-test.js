const fs = require("node:fs");
const path = require("node:path");

const timestamp = new Date().toISOString();

console.log(`PITCHAUDIT CRON TEST: SUCCESS ${timestamp}`);

fs.appendFileSync(
  path.join(__dirname, "cron-test.log"),
  `${timestamp} - scheduled task executed\n`
);