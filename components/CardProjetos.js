import Image from "next/image";
import styled from "styled-components";
import { BsLink } from "react-icons/bs";

const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 100px;

  div {
    width: 100%;
    height: auto;
  }

  div p {
    font-size: 20px;
    margin: 0 80px 25px 80px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 800px) {
    margin: 30px 20px;

    div p {
      font-size: 16px;
      margin: 0 25px 25px 25px;
    }
  }
`;

const ProjecNameLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  font-weight: 800;
  margin: 20px 0 20px 0;
  &:hover {
    color: #7ac943;
    transition: 0.5s;
  }

  svg {
    margin-left: 8px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export default function CardProjetos() {
  return (
    <DivCards>
      <div>
        <Image
          src="/images/pokenext.png"
          width="400"
          height="200"
          alt="img"
          layout="responsive"
          priority
        />

        <ProjecNameLink
          href="https://github.com/AllisonSilveiraDev/pokenext"
          target="_blank"
          alt="PokenextLink"
        >
          PokeNext
          <BsLink />
        </ProjecNameLink>

        <p>
          Projeto de Pokedex React, feito com NextJs, consumindo os dados da api
          PokéAPI, busca os detalhes dos pokemon e mostra de forma dinâmica !!
        </p>
      </div>
      <div>
        <Image
          src="/images/movies.png"
          width="400"
          height="200"
          alt="img"
          layout="responsive"
          priority
        />

        <ProjecNameLink
          href="https://github.com/AllisonSilveiraDev/MoviesReact"
          target="_blank"
          alt="moviesLink"
        >
          MoviesReact
          <BsLink />
        </ProjecNameLink>

        <p>
          Projeto de Filmes React, feito com Vite, consumindo os dados da api
          TMDB, busca os detalhes e imagens dos filmes, listando por procura e
          os mais bem avaliados na home!!
        </p>
      </div>
      <div>
        <Image
          src="/images/theme.png"
          width="400"
          height="200"
          alt="img"
          layout="responsive"
          priority
        />

        <ProjecNameLink
          href="https://github.com/AllisonSilveiraDev/themeSwitch"
          target="_blank"
          alt="themeLink"
        >
          ThemeSwitch
          <BsLink />
        </ProjecNameLink>

        <p>
          Projeto de um botão de troca de tema com React e Styled-components,
          feito com Create-react-app.
        </p>
      </div>
      <div>
        <Image
          src="/images/todo.png"
          width="400"
          height="200"
          alt="img"
          layout="responsive"
          priority
        />

        <ProjecNameLink
          href="https://github.com/AllisonSilveiraDev/TodoList"
          target="_blank"
          alt="TodoLink"
        >
          TodoList React
          <BsLink />
        </ProjecNameLink>
        <p>Projeto de Lista de tarefas React, feito com Vite.</p>
      </div>
    </DivCards>
  );
}
