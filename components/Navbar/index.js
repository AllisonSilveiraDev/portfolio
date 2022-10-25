import React, { useState } from "react";
import {
  NavLinks,
  Ancora,
  Content,
  Menu,
  CloseSidebar,
  ContentTitle,
} from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();

  const showSiderbar = () => setSidebar(!sidebar);

  function activeLink(path) {
    return asPath === `/${path}` ? "active" : "";
  }

  return (
    <Content>
      <ContentTitle>
        <h1>
          <span>{"{"}</span>
          {"AllisonDev"}
          <span>{"/}"}</span>
        </h1>
      </ContentTitle>
      <Menu>
        <FaBars onClick={showSiderbar} />
      </Menu>
      <NavLinks sidebar={sidebar}>
        <CloseSidebar onClick={showSiderbar}>
          <FaTimes />
        </CloseSidebar>
        <Link href="/">
          <Ancora className={activeLink("")} onClick={showSiderbar}>
            Home
          </Ancora>
        </Link>
        <Link href="projetos">
          <Ancora className={activeLink("projects")} onClick={showSiderbar}>
            Projetos
          </Ancora>
        </Link>
        <Link href="habilidades">
          <Ancora className={activeLink("habilidades")} onClick={showSiderbar}>
            Habilidades
          </Ancora>
        </Link>
      </NavLinks>
    </Content>
  );
}
