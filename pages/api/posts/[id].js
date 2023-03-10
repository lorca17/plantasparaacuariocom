import fs from "fs";
import path from "path";

// Enlazado Interno
async function interlinking(articulo, dataLinks, slug) {
  const carpetaLinks = path.join(process.cwd(), "interlinking");
  let fileLinks = await fs.readFileSync(
    carpetaLinks + "/" + dataLinks,
    "utf-8"
  );

  let enlacesList = fileLinks.trim().split("\n");
  // console.log(enlacesList);
  let texto = await JSON.stringify(articulo);

  async function insertarEnlaces(texto, anchoText, url) {
    if (texto.includes(anchoText)) {
      texto = await texto.replace(
        anchoText,
        "[" + anchoText + "](" + url + ")"
      );
    }
    return texto;
  }

  let anchoEnlacesCreados = [];
  let numeroMaximoEnlaces = 10;

  for (let datosLink of enlacesList) {
    let [anchoText, url] = datosLink.split(",");
    if (anchoEnlacesCreados.length >= numeroMaximoEnlaces) {
      return JSON.parse(texto);
    }
    // console.log(anchoEnlacesCreados.length);
    let checkAncho = JSON.stringify(anchoEnlacesCreados);

    if (
      !checkAncho.includes(anchoText) &&
      texto.includes(anchoText) &&
      slug != url
    ) {
      //  console.log(anchoText);
      texto = await insertarEnlaces(texto, anchoText, url).then(
        anchoEnlacesCreados.push(anchoText)
      );
    }
  }
  return JSON.parse(texto);
}

export default async function handler(req, res) {
  let nombrePost = req.query.id;
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readdirSync(jsonDirectory);

  // Si no exite el articulo
  if (!fs.existsSync(jsonDirectory + "/" + nombrePost + ".json")) {
    res.status(200).json(null);
    return;
  }

  // Leer datos del articulo
  const datosArticulo = JSON.parse(
    await fs.readFileSync(jsonDirectory + "/" + nombrePost + ".json", "utf-8")
  );

  // leer datos de los relacionados
  let todosAticulos = await fs.readdirSync(jsonDirectory);

  let relacionadosFile = await todosAticulos.filter((e) => {
    let fileName = jsonDirectory + "/" + e;
    let data = JSON.parse(fs.readFileSync(fileName, "utf-8"));
    if (data.parent === datosArticulo.parent) {
      return data;
    }
  });
  let relacionadosDatos = relacionadosFile.map((e) => {
    const datosArticulo = JSON.parse(
      fs.readFileSync(jsonDirectory + "/" + e, "utf-8")
    );
    // delete datosArticulo.articulo;
    const { articulo, ...postsRelacionados } = datosArticulo;
    return { postsRelacionados };
  });

  datosArticulo.articuloIntelinking = await interlinking(
    datosArticulo.articulo,
    "enlaces.csv",
    datosArticulo.slug
  );

  // console.log(datosArticulo.articuloIntelinking);

  // Fin Enlazado Interno

  datosArticulo.relacionados = relacionadosDatos;

  //Return the content of the data file in json format
  res.status(200).json(datosArticulo);
}
