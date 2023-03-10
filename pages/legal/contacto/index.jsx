import Link from "next/link";
import Head from "next/head";
import cfg from "../../../cfg.json";
import Header from "../../../components/Header";

export default function contacto() {
  return (
    <>
      <Head>
        <title>Aviso de Cookies</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="noindex,follow"></meta>
        <meta name="title" content="Aviso de Cookies" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*       <header className="md:flex items-center justify-between     py-3 md:py-4 bg-gray-900  relative   text-gray-50 ">
        <div className="flex justify-between min-w-min px-4">
          <div className="flex text-3xl font-normal relative  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <Link href="/">{cfg.nombrePagina}</Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-toggler"
            className="block cursor-pointer md:hidden self-center h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </header> */}
      <Header></Header>
      <div className="container mx-auto flex h-full justify-center mt-8 relative">
        <section className="flex flex-col md:flex-row gap-4      p-4 w-full justify-center">
          <div className="bg-blue-900 rounded-2xl flex flex-col px-8 justify-center items-center md:items-start order-2 md:order-1 md:rounded-tl-2xl md:rounded-bl-2xl">
            <h1 className="text-4xl mt-8 md:mt-0 border-b-2 md:border-b-0 text-gray-50">
              Contacto
            </h1>
            <div className="mt-8 flex flex-col w-full gap-8">
              <div className="flex w-full gap-1 items-center text-xl md:text-sm  text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {cfg.direccion}
              </div>
              <div className="flex gap-1 items-center text-xl md:text-sm text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {cfg.emailContacto}
              </div>
              <div className="flex gap-1 items-center text-xl md:text-sm text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {cfg.telefono}
              </div>
            </div>
            <div className="flex gap-8  mt-8 mb-8 md:mb-0 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-19.5036 -32.49725 169.0312 194.9835"
                className="h-12 cursor-pointer w-12"
              >
                <defs>
                  <radialGradient
                    fy="578.088"
                    fx="158.429"
                    gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)"
                    gradientUnits="userSpaceOnUse"
                    r={65}
                    cy="578.088"
                    cx="158.429"
                    id="c"
                  />

                  <linearGradient id="b">
                    <stop stopColor="#3771c8" offset={0} />
                    <stop offset=".128" stopColor="#3771c8" />
                    <stop stopOpacity={0} stopColor="#60f" offset={1} />
                  </linearGradient>
                  <linearGradient id="a">
                    <stop stopColor="#fd5" offset={0} />
                    <stop stopColor="#fd5" offset=".1" />
                    <stop stopColor="#ff543e" offset=".5" />
                    <stop stopColor="#c837ab" offset={1} />
                  </linearGradient>
                </defs>
                <path
                  d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                  fill="url(#c)"
                />
                <path
                  d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                  fill="url(#d)"
                />
                <path
                  d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                  fill="#fff"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 cursor-pointer pt-2"
                viewBox="-44.7006 -60.54775 387.4052 363.2865"
              >
                <path
                  fill="#ffffff"
                  d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 cursor-pointer pt-2 text-gray-50 fill-current"
                viewBox="-11.493675 -16.3118 99.61185 97.8708"
              >
                <path d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67" />
                <path d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1" />
              </svg>
            </div>
          </div>
          <div className="md:w-1/2 order-1">
            <h2 className="text-4xl font-bold mb-4 tracking-wider text-blue-600">
              Ponerse en contacto
            </h2>
            <form className="w-full">
              <div className="w-full">
                <label className="text-gray-600 font-medium md:my-2">
                  Tu mensaje
                </label>
                <textarea
                  placeholder="Tu mensaje"
                  cols={5}
                  rows={6}
                  className="outline-none focus:outline-none border   text-xl   p-4 text-gray-800  w-full"
                  defaultValue={""}
                />
              </div>
              <div className="w-full">
                <label className="text-gray-600 font-medium md:my-2">
                  Tu Email
                </label>
                <input
                  type="email"
                  className="w-full  p-2 my-2 px-4 border focus:border-b-4  text-xl text-gray-800  focus:outline-none"
                  placeholder="tu email"
                  required="true "
                />
              </div>
              <div className="w-full mb-4 md:mb-0">
                <label className="text-gray-600 font-medium md:my-2">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  className="w-full  p-2 px-4 border  text-xl text-gray-800  focus:outline-none"
                  placeholder="tu nombre"
                  required="true "
                />
              </div>
              <button
                className="my-2 py-3 delay-200 text-md uppercase  tracking-wider font-medium text-center w-full rounded-full bg-blue-700 text-gray-50 hover:text-blue-900 hover:bg-transparent border hover:border-blue-900  focus:outline-none "
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
