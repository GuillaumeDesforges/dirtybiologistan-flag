import { doJob } from "./job.js";
import { log } from "./log.js";

const JOB_INTERVAL_SECONDS = 30 * 60;

function main() {
  log("Scheduling the job every " + JOB_INTERVAL_SECONDS + " seconds");
  const jobSchedule = setInterval(doJob, JOB_INTERVAL_SECONDS * 1000);
}

main();
