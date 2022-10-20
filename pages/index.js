import Head from "next/head";
import Conteudo from "../components/Conteudo";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{"{AllisonDev/}"}</title>
      </Head>
      <Navbar />
      <Conteudo />
    </div>
  );
}
