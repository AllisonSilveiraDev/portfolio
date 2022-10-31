import Navbar from "../../components/Navbar";

import Icons from "../../components/IconsHabilidades";

import styled from "styled-components";

export const Desc = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin-top: 50px;
    font-weight: 800;
    color: #7ac943;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  p {
    margin: 20px 100px 0 100px;
    font-size: 18px;

    @media (max-width: 800px) {
      margin: 20px 40px 0 40px;
      font-size: 14px;
    }
  }
`;

export default function Habilidades() {
  return (
    <div>
      <Navbar />
      <Desc>
        <h2>Habilidades</h2>
        <p className="desc">
          Estudo programação a aproximadamente um ano, todos os dias de 1 a 3
          horas, aqui estão listadas as tecnologias que tenho conhecimento,
          também tenho um inglês intermediário e conhecimento em ferramentas de
          designer como Illustrator e photoshop.
        </p>
      </Desc>
      <Icons />
    </div>
  );
}
