import Navbar from "../../components/Navbar";

import Icons from "../../components/IconsHabilidades";

import { Desc } from "./styles";

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
