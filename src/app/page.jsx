
import Home from "../app/Home/Home";

export default function Page() {
  return <Home />;

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/bibliotecas">
        <button>Ir para Bibliotecas</button>
      </Link>
    </main>
  );

}