import { getConfig } from "./config.js";
import { doJob } from "./job.js";

function main() {
  const config = getConfig();
  doJob(config);
}

main();
