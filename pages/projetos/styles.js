import styled from "styled-components";

export const ProStyle = styled.div`
  h2 {
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
  }
`;
