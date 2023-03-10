import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "data");

  let numeroPagina = req.query.id;

  let todosAticulos = await fs
    .readdirSync(jsonDirectory)
    .slice(numeroPagina - 50, numeroPagina);

  let datosArticulos = await todosAticulos.map((e) => {
    let fileName = jsonDirectory + "/" + e;
    let datosArchivo = JSON.parse(fs.readFileSync(fileName, "utf-8"));
    // delete salida["articulo"];
    const { articulo, ...salida } = datosArchivo;
    salida.slug = e.split(".")[0];
    return salida;
  });

  let json = { pagina: numeroPagina, todosAticulos, datosArticulos };
  res.status(200).json(json);
}
