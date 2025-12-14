export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/logo.png" alt="Dsport Pro" style={{ width: "40px" }} />
            <strong>Dsport Pro</strong>
          </div>

          {/* MENU */}
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="/">Home</a>
            <a href="#products">Products</a>
            <a href="https://wa.me/2348084665060">Contact</a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}
