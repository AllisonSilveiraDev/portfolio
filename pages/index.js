import Head from "next/head";
import HomeConteiner from "../components/HomeConteiner";
import Navbar from "../components/Navbar";
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
      <HomeConteiner />
      <Social />
    </div>
  );
}
