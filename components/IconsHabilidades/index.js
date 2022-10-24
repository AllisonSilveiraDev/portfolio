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

import { ContainerIcons } from "./styles";

export default function IconsHabilidades() {
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
