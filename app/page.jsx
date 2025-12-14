import React from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Dsport Pro Goalkeeper Store</h1>
        <p>Premium goalkeeper kits available across Nigeria 🇳🇬</p>
      </header>

      {/* PRODUCTS */}
      <section>
        <h2>Products</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div style={cardStyle}>
            <h3>Goalkeeper Gloves</h3>
            <p>High-grip professional gloves</p>
            <strong>₦30,000</strong>
            <br />
            <a href="https://wa.me/2348084665060?text=I%20want%20to%20buy%20Goalkeeper%20Gloves" target="_blank">Order on WhatsApp</a>
          </div>

          <div style={cardStyle}>
            <h3>Goalkeeper Jersey</h3>
            <p>Breathable match jersey</p>
            <strong>₦15,000</strong>
            <br />
            <a href="https://wa.me/2348084665060?text=I%20want%20to%20buy%20Goalkeeper%20Jersey" target="_blank">Order on WhatsApp</a>
          </div>

          <div style={cardStyle}>
            <h3>Full Goalkeeper Kit</h3>
            <p>Gloves + Jersey + Shorts</p>
            <strong>₦50,000</strong>
            <br />
            <a href="https://wa.me/2348084665060?text=I%20want%20to%20buy%20Full%20Goalkeeper%20Kit" target="_blank">Order on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ABOUT (A) */}
      <section style={{ marginTop: "40px" }}>
        <h2>About Dsport</h2>
        <p>
          Dsport is a Nigerian sports brand dedicated to providing quality and affordable
          goalkeeper equipment for professionals and upcoming talents.
        </p>
      </section>

      {/* DELIVERY (D) */}
      <section style={{ marginTop: "40px" }}>
        <h2>Delivery & Payment</h2>
        <ul>
          <li>Nationwide delivery across Nigeria</li>
          <li>Payment via WhatsApp order confirmation</li>
          <li>Online payment integration (Paystack coming soon)</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "50px", textAlign: "center" }}>
        <p>📞 WhatsApp: +234 808 466 5060</p>
        <p>© {new Date().getFullYear()} Dsport Store</p>
      </footer>
    </main>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
};
