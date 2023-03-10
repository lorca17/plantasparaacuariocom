export default function toUrl(str) {
  let salida = str.toLowerCase();
  salida = salida.replaceAll(",", "");
  salida = salida.replaceAll("¿", "");
  salida = salida.replaceAll("?", "");
  salida = salida.replaceAll("¡", "");
  salida = salida.replaceAll("!", "");
  salida = salida.replaceAll("á", "a");
  salida = salida.replaceAll("é", "e");
  salida = salida.replaceAll("í", "i");
  salida = salida.replaceAll("ó", "o");
  salida = salida.replaceAll("ú", "u");
  salida = salida.replaceAll(":", "");
  salida = salida.replaceAll(";", "");
  salida = salida.replaceAll(" ", "-");
  return salida;
}
