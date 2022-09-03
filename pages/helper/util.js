import fs from "fs";
import path from "path";

export function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}
export function getDataOf(filePath) {
  const file = fs.readFileSync(filePath);
  const data = JSON.parse(file);
  return data;
}
