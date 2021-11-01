import moment from "moment";

type LogLevel = "info" | "error";

export function log(msg: string, level: LogLevel = "info") {
  console.log(
    "[" +
      level.toUpperCase() +
      "]" +
      "[" +
      moment().format("YYYY-MM-DD[T]HH:mm:ss") +
      "] " +
      msg
  );
}
