import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

import styled from "styled-components";

const ContainerIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 100px 0 100px;

  div {
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .icon {
    font-size: 90px;
  }

  p {
    color: #7ac943;
  }

  path {
    &:hover {
      color: #7ac943;
      transition: 0.5s;
    }
  }
  .tsStyle {
    text-decoration: line-through;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 20px;

    .icon {
      font-size: 50px;
    }
    div {
      margin: 20px;
    }
  }
`;

export default function Icons() {
  return (
    <ContainerIcons>
      <div>
        <p className="icon">
          <FaHtml5 />
        </p>
        <p>HTML</p>
      </div>
      <div>
        <p className="icon">
          <FaCss3Alt />
        </p>
        <p>CSS</p>
      </div>
      <div>
        <p className="icon">
          <BiGitBranch />
        </p>
        <p>Git</p>
      </div>
      <div>
        <p className="icon">
          <SiJavascript />
        </p>
        <p>Javascript</p>
      </div>
      <div>
        <p className="icon">
          <SiNodedotjs />
        </p>
        <p>Nodejs</p>
      </div>
      <div>
        <p className="icon">
          <SiReact />
        </p>
        <p>React</p>
      </div>
      <div>
        <p className="icon">
          <SiNextdotjs />
        </p>
        <p>Nextjs</p>
      </div>
      <div>
        <p className="icon">
          <SiStyledcomponents />
        </p>
        <p>Styled</p>
        <p>Components</p>
      </div>
      <div>
        <p className="icon">
          <SiTypescript />
        </p>
        <p className="tsStyle">Typescript</p>
        <p>Em breve</p>
      </div>
    </ContainerIcons>
  );
}
