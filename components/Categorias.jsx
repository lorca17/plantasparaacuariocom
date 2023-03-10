export default function Categorias() {
  return (
    <div className="mb-8 ">
      <p className="text-3xl font-semibold border-l-4 border-gray-800 pl-2 my-8 text-gray-700">
        Categorias
      </p>
      <ul className="ml-3 text-lg font-semibold text-gray-700">
        <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between">
          lista <span className="text-gray-900">1</span>
        </li>
      </ul>
    </div>
  );
}
