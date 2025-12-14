import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <Image
        src="/logo.png"
        alt="Dsport Pro Logo"
        width={250}
        height={250}
        priority
      />

      <h1>Dsport Pro Goalkeeper Store</h1>
      <p>Premium goalkeeper kits available across Nigeria 🇳🇬</p>
    </main>
  );
}
