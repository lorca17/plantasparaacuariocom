import Link from "next/link";
import NavToggle from "../components/NavToggle";
import cfg from "../cfg.json";
export default function Header() {
  return (
    <>
      <header>
        <NavToggle nombreHome={cfg.nombrePagina} />
      </header>
    </>
  );
}
