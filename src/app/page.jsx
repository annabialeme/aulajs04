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