import Link from "next/link";
import { Nav } from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <Link href={"/"}>
        <h1>
          <span>{"{"}</span>
          {"AllisonDev"}
          <span>{"/}"}</span>
        </h1>
      </Link>
      <ul>
        <Link href={"/projetos"}>
          <li>Projetos</li>
        </Link>

        <Link href={"/habilidades"}>
          <li>Habilidades</li>
        </Link>
      </ul>
    </Nav>
  );
}
