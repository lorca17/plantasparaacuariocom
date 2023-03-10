import Link from "next/link";
import Image from "next/image";
import cfg from "../cfg.json";
export default function Featuraposts({ datosArticulos }) {
  return (
    <section
      id="featured-posts"
      className="container mx-auto grid  sm:grid-cols-3 gap-4 p-2"
    >
      <h2 className="col-span-full text-3xl md:text-4xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">
        Publicaciones Destacadas
      </h2>

      {datosArticulos.map((e, index) => {
        return (
          <Link href={e.slug} key={index}>
            <div className="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4">
              <div className="max-w-2xl  h-auto  flex items-center relative ">
                <Image
                  src={"/img/" + e.slug + ".webp"}
                  /*  loading="lazy" */
                  width={300}
                  height={300}
                  className="w-full h-auto"
                  alt={e.slug.replaceAll("-", " ")}
                  title={e.titulo}
                />
                <div className="bg-blue-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                  {e.categoria}
                </div>
              </div>
              <div className="">
                <h3 className="text-xl font-bold text-gray-800 mb-2 cursor-pointer capitalize">
                  {e.titulo.replaceAll('"', "")}
                </h3>
                <div className="flex gap-2 mb-2">
                  <div className="text-sm text-gray-600">
                    <h4>By {cfg.nombreAutor}</h4>
                    {/* <h4>Updated over 2 weeks ago</h4> */}
                  </div>
                </div>
                {/*  <p className="text-gray-700">{e.descripcion}</p> */}
                <button className="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">
                  Leer Mas
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
