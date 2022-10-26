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

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

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
          <Ancora onClick={showSiderbar}>Home</Ancora>
        </Link>
        <Link href="projetos">
          <Ancora onClick={showSiderbar}>Projetos</Ancora>
        </Link>
        <Link href="habilidades">
          <Ancora onClick={showSiderbar}>Habilidades</Ancora>
        </Link>
      </NavLinks>
    </Content>
  );
}
