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

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      font-size: 25px;
    }
  }

  p {
    margin: 20px 100px 0 100px;
    font-size: 18px;

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      margin: 20px 40px 0 40px;
      font-size: 14px;
    }
  }
`;
