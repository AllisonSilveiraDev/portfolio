import CardProjetos from "../../components/CardProjetos";
import Navbar from "../../components/Navbar";
import { ProStyle } from "./styles";

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
