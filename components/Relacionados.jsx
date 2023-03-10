import Link from "next/link";
import Image from "next/image";
export default function Relacionados({ datoRelacionados }) {
  return (
    <div id="related-posts" className="grid gap-2">
      <p className="text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700">
        Artículos Relacionados
      </p>

      {datoRelacionados.map((e, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-2   border rounded-lg">
              <div className=" md:col-span-2 lg:col-span-1">
                <Image
                  src={`img/${e.postsRelacionados.slug}.webp`}
                  className="w-full h-auto"
                  /* loading="lazy" */
                  alt={e.postsRelacionados.ppa}
                  title={e.postsRelacionados.titulo}
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center">
                <p className="text-xl cursor-pointer capitalize">
                  <Link
                    href={e.postsRelacionados.slug}
                    alt={e.postsRelacionados.ppa}
                    title={e.postsRelacionados.titulo}
                  >
                    {e.postsRelacionados.titulo.replaceAll('"', "")}
                  </Link>
                </p>
                {/*  <p className="text-gray-600">
               texto
              </p> */}
              </div>
            </div>
            <Link href={e.postsRelacionados.slug}>
              <button className="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mb-10 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">
                Leer Mas
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
