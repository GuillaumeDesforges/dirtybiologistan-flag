import { Bucket, Storage } from "@google-cloud/storage";
import dotenv from "dotenv";

export type Config = {
  bucket: Bucket;
};

export function getConfig(): Config {
  const env = dotenv.config();
  if (env.error) {
    throw env.error;
  }

  const projectId = env.parsed.GCP_PROJECT_ID;
  const keyFilename = env.parsed.GCP_KEY_FILE;
  const bucketName = env.parsed.BUCKET;

  const storage = new Storage({
    projectId,
    keyFilename,
  });
  const bucket = storage.bucket(bucketName);

  return {
    bucket,
  };
}
