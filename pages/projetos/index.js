import CardProjetos from "../../components/CardProjetos";
import Navbar from "../../components/Navbar";
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

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }
`;

export default function Projetos() {
  return (
    <>
      <Navbar />
      <ProStyle>
        <h2>Projetos</h2>
        <CardProjetos />
      </ProStyle>
    </>
  );
}
