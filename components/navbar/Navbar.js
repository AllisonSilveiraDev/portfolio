import Link from "next/link";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
`;

const Logo = styled.h1`
  font-family: "Cascadia";
  span {
    color: #7ac943;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  font-size: 23px;
  margin-right: 3em;
  cursor: pointer;
  &:hover {
    color: #7ac943;
  }
`;

export default function Navbar() {
  return (
    <Bar>
      <Logo>
        <span>{"{"}</span>
        {"AllisonDev"}
        <span>{"/}"}</span>
      </Logo>
      <Menu>
        <Link href={"/projetos"}>
          <Item>Projetos</Item>
        </Link>

        <Link href={"/habilidades"}>
          <Item>Habilidades</Item>
        </Link>

        <Link href={"/sobre"}>
          <Item>Sobre</Item>
        </Link>

        <Link href={"/contatos"}>
          <Item>Contatos</Item>
        </Link>
      </Menu>
    </Bar>
  );
}
