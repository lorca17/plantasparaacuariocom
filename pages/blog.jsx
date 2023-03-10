import Footer from "../components/Footer";
import Header from "../components/Header";
import Paginacion from "../components/Paginacion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import cfg from "../cfg.json";

export default function Blog({ datosArticulos }) {
  return (
    <>
      <Head>
        <title>{cfg.tituloBlog}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index,follow"></meta>
        <meta name="title" content={cfg.tituloBlog} />
        <meta name="description" content={cfg.descripcionBlog} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${process.env.dominio}blog`} />
      </Head>
      <Header></Header>
      <div className="container mx-auto mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-2 gap-5">
          {/* Inicio listado */}

          {datosArticulos.datosArticulos.map((e, index) => {
            return (
              <div
                className="blog-post w-full overflow-none border rounded-md p-10"
                key={index}
              >
                <div className="max-w-2xl  h-auto  flex items-center relative ">
                  <Link href={e.slug}>
                    <Image
                      width={450}
                      height={350}
                      /* loading="lazy" */
                      src={"/img/" + e.slug + ".webp"}
                      className="w-full h-auto"
                      alt={e.slug.replaceAll("-", " ")}
                      title={e.titulo.replaceAll('"', "")}
                    />
                  </Link>
                  <div className="bg-blue-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                    {e.categoria}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <div className="text-sm text-gray-500">
                      <p>
                        By{" "}
                        <span className="text-gray-700 cursor-pointer">
                          {cfg.nombreAutor}
                        </span>{" "}
                      </p>
                      {/*  <h4>Updated over 2 weeks ago</h4> */}
                    </div>
                  </div>
                  <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800 capitalize">
                    <Link href={e.slug}>{e.titulo.replaceAll('"', "")}</Link>
                  </h4>
                  <p className="text-md my-4 text-gray-500  font-sans">
                    {e.descripcion}
                  </p>
                  <Link href={e.slug} className="text-blue-500 mb-4">
                    Leer mas →
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Fin LIstado */}
        </div>
      </div>
      <Paginacion numeroPaginas={datosArticulos.numeroPaginas}></Paginacion>
      <Footer></Footer>
    </>
  );
}

export async function getServerSideProps(context) {
  let pageNum = context.query.num || 50;
  let res = await fetch(`${process.env.dominio}api/page/${pageNum}`);
  let datosArticulos = await res.json();
  let numeroPaginasRes = await fetch(`${process.env.dominio}/api/paginacion`);
  let numeroPaginas = await numeroPaginasRes.json();
  datosArticulos.numeroPaginas = numeroPaginas;

  return {
    props: {
      datosArticulos,
      pageNum,
    },
  };
}
