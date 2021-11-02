import { getConfig } from "./config.js";
import { doJob } from "./job.js";
import { log } from "./log.js";

const JOB_INTERVAL_SECONDS = 10 * 60;

function main() {
  log("Get config");
  const config = getConfig();
  log("Scheduling the job every " + JOB_INTERVAL_SECONDS + " seconds");
  const jobWithConfig = () => doJob(config);
  const jobSchedule = setInterval(jobWithConfig, JOB_INTERVAL_SECONDS * 1000);
}

main();
