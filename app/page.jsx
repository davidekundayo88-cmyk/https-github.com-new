import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>

      {/* LOGO */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Image
          src="/logo.png"
          alt="Dsport Pro Logo"
          width={160}
          height={160}
          priority
        />
        <h1>Dsport Pro Goalkeeper Store</h1>
        <p>Premium goalkeeper kits available across Nigeria 🇳🇬</p>
      </div>

      {/* PRODUCTS */}
      <section>
        <h2>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* PRODUCT 1 */}
          <div style={cardStyle}>
            <h3>Goalkeeper Gloves</h3>
            <p>High-grip professional gloves</p>
            <strong>₦30,000</strong>
            <br />
            <a href="https://wa.me/2348084665060">Order on WhatsApp</a>
          </div>

          {/* PRODUCT 2 */}
          <div style={cardStyle}>
            <h3>Goalkeeper Jersey</h3>
            <p>Breathable match jersey</p>
            <strong>₦15,000</strong>
            <br />
            <a href="https://wa.me/2348084665060">Order on WhatsApp</a>
          </div>

          {/* PRODUCT 3 */}
          <div style={cardStyle}>
            <h3>Full Goalkeeper Kit</h3>
            <p>Gloves + Jersey + Shorts</p>
            <strong>₦50,000</strong>
            <br />
            <a href="https://wa.me/2348084665060">Order on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ marginTop: "50px" }}>
        <h2>About Dsport</h2>
        <p>
          Dsport is a Nigerian sports brand dedicated to providing quality and
          affordable goalkeeper equipment for professionals and upcoming
          talents.
        </p>
      </section>

      {/* DELIVERY */}
      <section style={{ marginTop: "30px" }}>
        <h2>Delivery & Payment</h2>
        <ul>
          <li>Nationwide delivery across Nigeria</li>
          <li>Payment via WhatsApp order confirmation</li>
          <li>Online payment (Paystack coming soon)</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "50px", textAlign: "center" }}>
        <p>📞 WhatsApp: +234 808 466 5060</p>
        <p>© 2025 Dsport Pro</p>
      </footer>
    </main>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};
