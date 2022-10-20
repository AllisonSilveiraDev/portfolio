import styled from "styled-components";

const Btndow = styled.a`
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;

  background-color: #7ac943;
  &:hover {
    background-color: white;
    color: #7ac943;
  }
`;

const Btndiv = styled.div`
  margin-top: 80px;
`;

export default function Btn() {
  return (
    <Btndiv>
      <Btndow href="/files/portfolio.pdf" alt="portfolioPdf" target="_blank">
        Download CV
      </Btndow>
    </Btndiv>
  );
}
