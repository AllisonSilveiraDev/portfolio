import styled from "styled-components";

const Btndiv = styled.div`
  margin-top: 80px;

  a {
    padding: 20px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;

    background-color: #7ac943;
    &:hover {
      background-color: white;
      color: #7ac943;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 40px 0 25px 0;
    a {
      font-size: 15px;
    }
  }
`;

export default function Btn() {
  return (
    <Btndiv>
      <a href="/files/portfolio.pdf" alt="portfolioPdf" target="_blank">
        Download CV
      </a>
    </Btndiv>
  );
}
