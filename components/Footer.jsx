import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:flex items-center justify-between     py-3 md:py-4 bg-gray-900  relative   text-gray-50 ">
      <ul>
        <li>
          <Link href="/legal/aviso-cookies">Aviso Legal</Link>
        </li>
        <li>
          <Link href="/legal/aviso-legal">Politica de Cookies</Link>
        </li>
      </ul>
    </div>
  );
}
