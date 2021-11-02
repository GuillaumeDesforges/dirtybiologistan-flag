import moment from "moment";
import path from "path";
import { Config } from "./config.js";
import { log } from "./log.js";
import { fetchFlag } from "./source.js";
import { storeToBucketFile } from "./target.js";

const SNAPSHOTS_DIRNAME = "snapshots";

// save a snapshot of the current state of the flag
export async function doJob(config: Config) {
  const jobStartTime = moment.utc();
  log("Job started at " + jobStartTime.toISOString());

  // fetch from website
  const snapshotData = await fetchFlag();

  if (snapshotData == null) {
    log("Failed to fetch data.");
  } else {
    const snapshotPath = path.join(
      SNAPSHOTS_DIRNAME,
      jobStartTime.format("YYYY-MM-DD[T]HH-mm-ss") + ".json"
    );

    try {
      await storeToBucketFile(
        config.bucket,
        snapshotPath,
        JSON.stringify(snapshotData)
      );
      log("Successfully written snapshot to file " + snapshotPath);
    } catch (e: any) {
      const error: Error = e; // cast
      log(
        "Failed to write snapshot to file " +
          snapshotPath +
          ", message=" +
          error.message,
        "error"
      );
    }
  }
}
