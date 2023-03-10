import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readdirSync(jsonDirectory);

  res.status(200).json(fileContents.length);
}
