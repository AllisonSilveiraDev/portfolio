import Image from "next/image";
import styled from "styled-components";
import Btn from "../components/Btn";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 70px 100px 0 100px;

  .image {
    display: block;
    width: 350px;
    height: 350px;
  }

  .info {
    width: 50%;
    margin-right: 80px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 30 px;
    font-weight: 800;
  }

  span {
    color: #7ac943;
  }

  p {
    font-size: 16px;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;

    .image {
      display: block;
      width: 200px;
      height: 200px;
    }
    .info {
      width: 80%;
      margin: 15px;
    }

    h2 {
      margin-bottom: 20px;
      font-size: 17px;
    }

    p {
      font-size: 14px;
    }
  }
`;

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
        <Btn />
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
