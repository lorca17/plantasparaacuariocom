import Link from "next/link";
export default function Paginacion({ numeroPaginas }) {
  let paginas = (numeroPaginas / 50).toFixed();
  let arr = [...Array(parseInt(paginas)).keys()];

  if (paginas <= 50) {
    return;
  }

  return (
    <div id="pagination" className="mb-8 mx-auto">
      <div className="flex w-full justify-center gap-2">
        {arr.map((e, index) => {
          return (
            <div
              key={index}
              className="w-12 h-12 text-lg text-gray-200 hover:text-gray-200 text-center font-bold flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-500  cursor-pointer"
            >
              <Link href={`${process.env.dominio}blog?num=${50 * index}`}>
                {index}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
