import styled from "styled-components";

export const Container = styled.div`
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
