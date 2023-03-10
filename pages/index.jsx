import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Heroehead from "../components/Heroehead";
import Newsletter from "../components/Newsletter";
import Featuraposts from "../components/Featureposts";
import Footer from "../components/Footer";
import cfg from "../cfg.json";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>{cfg.tituloHome}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index,follow"></meta>
        <meta name="title" content={cfg.tituloHome} />
        <meta name="description" content={cfg.descripcionHome} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={cfg.dominio} />
      </Head>
      <Header></Header>
      <Featuraposts
        datosArticulos={props.datosArticulos.datosArticulos}
      ></Featuraposts>
      <Heroehead></Heroehead>
      <Newsletter></Newsletter>

      {/* 
      <div className="container mx-auto">
        <section id="feature">
          <p class="col-span-full text-3xl md:text-4xl mb-8 border-l-4 border-gray-800 pl-2   my-4 text-gray-800 ">
            Features
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-around">
            <div class=" flex flex-row md:flex-col  items-center px-8 py-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-32 h-32     md:h-40 md:w-40 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p class="text-center text-3xl  text-gray-900">
                Responsive Desing
              </p>
            </div>
            <div class=" flex flex-row md:flex-col  items-center px-8 py-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-32 w-32 md:h-40 md:w-40 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              <p class="text-center text-3xl  text-gray-900">Low Size</p>
            </div>
            <div class=" flex flex-row md:flex-col  items-center px-8 py-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-32 w-32 md:h-40 md:w-40 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <p class="text-center text-3xl  text-gray-900">Semantic code</p>
            </div>
          </div>
        </section>
      </div> */}
      <Footer></Footer>
    </>
  );
}
export async function getServerSideProps() {
  let res = await fetch(`${process.env.dominio}api/page/50`);
  let datosArticulos = await res.json();

  return {
    props: {
      datosArticulos,
    },
  };
}
