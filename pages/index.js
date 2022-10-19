import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{"{AllisonDev/}"}</title>
      </Head>
      <Navbar />
    </div>
  );
}
