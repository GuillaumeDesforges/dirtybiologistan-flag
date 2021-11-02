import { Bucket, File } from "@google-cloud/storage";

export async function storeToBucketFile(
  bucket: Bucket,
  path: string,
  content: string,
  metadata: any = {}
) {
  const file: File = bucket.file(path);
  await file.save(content, { metadata });
}
