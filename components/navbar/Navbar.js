import Link from "next/link";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;

  h1 {
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
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    font-size: 23px;
    margin-right: 2em;
    cursor: pointer;
    &:hover {
      color: #7ac943;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    h1 {
      font-size: 16px;
    }

    li {
      font-size: 12px;
    }
  }
`;

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
