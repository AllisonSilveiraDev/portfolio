import Link from "next/link";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
`;

const Logo = styled.p`
  font-family: "Cascadia";
  font-size: 40px;
  cursor: pointer;
  span {
    color: #7ac943;
  }
  &:hover {
    color: #7ac943;
    span {
      color: #fff;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  font-size: 23px;
  margin-right: 2em;
  cursor: pointer;
  &:hover {
    color: #7ac943;
  }
`;

export default function Navbar() {
  return (
    <Bar>
      <Link href={"/"}>
        <Logo>
          <span>{"{"}</span>
          {"AllisonDev"}
          <span>{"/}"}</span>
        </Logo>
      </Link>
      <Menu>
        <Link href={"/projetos"}>
          <Item>Projetos</Item>
        </Link>

        <Link href={"/habilidades"}>
          <Item>Habilidades</Item>
        </Link>
      </Menu>
    </Bar>
  );
}
