import Header from "../components/Header";
import Head from "next/head";
import Categorias from "../components/Categorias";
import Autor from "../components/Autor";
import Relacionados from "../components/Relacionados";
import Comentarios from "../components/Comentarios";
import Markdown from "markdown-to-jsx";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import toUrl from "../utils/toUrl";
import cfg from "../cfg.json";
import Error from "next/error";

export default function Single({ datos }) {
  // Si hay error en los datos
  if (datos === null) {
    return <Error statusCode={404} title="page Not Found 404" />;
  }

  return (
    <>
      <Head>
        <title>{datos.titulo.replaceAll('"', "")}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index,follow"></meta>
        <meta name="title" content={datos.title} />
        <meta name="description" content={datos.descripcion} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={datos.slug} />
      </Head>
      <Header />
      <div className="container mx-auto px-2">
        <section className="grid md:grid-cols-3 mt-12">
          <main className="col-span-2 relative md:mr-2">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {datos.titulo.replaceAll('"', "")}
            </h1>

            <div className="flex mt-2 my-2 items-center gap-4">
              <div className="text-gray-500">
                By{" "}
                <span className="text-gray-800 cursor-pointer">
                  {cfg.nombreAutor} - {datos.categoria}
                </span>
              </div>
            </div>
            <div className="flex justify-center border">
              <Image
                width={412}
                height={412}
                src={"/img" + datos.slug + ".webp"}
                className="cursor-pointer w-full p-5"
                alt={datos.slug.replaceAll("-", " ")}
                title={datos.titulo.replaceAll('"', "")}
              />
            </div>

            <blockquote className="italic font-semibold font-serif text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8 m-4 sm:mx-8">
              {datos.descripcion}
            </blockquote>
            {
              <p className="text-xl  bg-slate-300 border border-gray-500 rounded-lg my-5">
                Otros articulos interesantes y relacionados:{"  "}
                <Link
                  href="/"
                  title={cfg.tituloHome}
                  className="text-2xl text-blue-700 underline"
                >
                  {cfg.tituloHome}
                </Link>
              </p>
            }
            <article className="m-10">
              <Markdown>
                {datos.articuloIntelinking.split("\n\n").slice(2).join("\n\n")}
              </Markdown>

              <p>
                En esta pagina tambien respondemos a otras preguntas tipicas
                como por ejemplo:{" "}
                <Link
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 "
                  href={"/" + toUrl(datos.az)}
                >
                  {datos.az}
                </Link>{" "}
                y{" "}
                <Link
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 "
                  href={"/" + toUrl(datos.za)}
                >
                  {datos.za}
                </Link>
              </p>
            </article>
            {/* <Comentarios></Comentarios> */}
          </main>
          <aside className="col-span-2 md:col-span-1 mt-4 md:mt-0">
            <Relacionados datoRelacionados={datos.relacionados}></Relacionados>
            <Autor></Autor>
            {/* <Categorias></Categorias> */}
          </aside>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export async function getServerSideProps(context) {
  let slug = context.resolvedUrl;

  let res = await fetch(`${process.env.dominio}api/posts${slug}`);

  let datos = await res.json();

  if (datos === null) {
    return {
      props: {
        datos: null,
      },
    };
  }
  datos.img = "/img" + slug + ".webp";
  datos.slug = slug;

  return {
    props: {
      datos,
    },
  };
}
