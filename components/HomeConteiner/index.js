import Image from "next/image";
import { Container } from "./styles";
import CvBtn from "../CvBtn";

export default function Conteudo() {
  return (
    <Container>
      <div className="info">
        <h2>
          Olá, eu sou <span>Allison Silveira</span>
        </h2>
        <p>
          Sempre fui curioso e gosto de aprender coisas novas, isso me levou a
          encontrar o incrível mundo da programação, onde fico impressionado com
          como podemos evoluir, aprender e construir coisas grandiosas, tenho 26
          anos moro no RS e quero me tornar um ótimo desenvolvedor. Tenho uma
          boa comunicação, bom relacionamento com pessoas, sou organizado e
          busco sempre ser o mais eficaz em qualquer tarefa. Sou fascinado por
          tecnologia, natureza, arte e em me tornar uma pessoa e profissinal
          melhor a cada dia.
        </p>
        <CvBtn />
      </div>
      <div className="image">
        <Image
          src="/images/redondog.png"
          width="400"
          height="400"
          alt="img"
          layout="responsive"
          priority
        />
      </div>
    </Container>
  );
}
