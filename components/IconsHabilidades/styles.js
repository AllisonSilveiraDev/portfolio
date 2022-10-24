import styled from "styled-components";

export const ContainerIcons = styled.div`
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
