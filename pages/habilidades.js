import Navbar from "../components/navbar/Navbar.js";
import styled from "styled-components";
import Icons from "../components/Icons.js";

const TitleH = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  margin-top: 50px;
  font-weight: 800;
  color: #7ac943;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    font-size: 25px;
  }
`;

const Descric = styled.p`
  margin: 20px 100px 0 100px;
  font-size: 18px;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 20px 40px 0 40px;
    font-size: 14px;
  }
`;

export default function Habilidades() {
  return (
    <div>
      <Navbar />
      <TitleH>Habilidades</TitleH>
      <Descric>
        Estudo programação a aproximadamente um ano, todos os dias de 1 a 3
        horas, aqui estão listadas as tecnologias que tenho conhecimento, também
        tenho um inglês intermediário e conhecimento em ferramentas de designer
        como Illustrator e photoshop.
      </Descric>
      <Icons />
    </div>
  );
}
