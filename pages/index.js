import Head from "next/head";
import Conteudo from "../components/Conteudo";
import Navbar from "../components/navbar/Navbar";
import Social from "../components/Social";
import Background from "../components/Background";

export default function Home() {
  return (
    <div>
      <Background />
      <Head>
        <title>{"{AllisonDev/}"}</title>
      </Head>
      <Navbar />
      <Conteudo />
      <Social />
    </div>
  );
}
