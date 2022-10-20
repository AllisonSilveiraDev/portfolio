import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 250px 0 100px;
`;

const Info = styled.div`
  width: 50%;
  margin: 80px;

  h2 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 800;
  }

  span {
    color: #7ac943;
  }

  p {
    font-size: 20px;
  }
`;

export default function Conteudo() {
  return (
    <Container>
      <Info>
        <h2>
          Olá, eu sou <span>Allison Silveira</span>
        </h2>
        <p>
          Serão avaliadas cinco competências, que se resumem em: 1 - domínio da
          escrita formal da língua portuguesa; 2 - compreensão da proposta e
          desenvolvimento de um texto dissertativo-argumentativo; 3 -
          organização de argumentos em defesa de um ponto de vista; 4 -
          conhecimento de mecanismos para estruturar o texto com coesão; e 5 -
          habilidade em propor uma intervenção para o problema abordado,
          respeitando os direitos humanos.
        </p>
      </Info>

      <Image src="/images/redondog.png" width="400" height="400" alt="img" />
    </Container>
  );
}
