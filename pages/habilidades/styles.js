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
