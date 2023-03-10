import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readdirSync(jsonDirectory);

  let sitemap = fileContents.map((e) => {
    let obj = {};
    let value = e.split(".")[0];
    obj.id = value;
    return obj;
  });

  res.status(200).json(sitemap);
}
