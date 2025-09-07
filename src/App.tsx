import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
      {/* Header / Menu */}
      <header
        style={{
          backgroundColor: "#282c34",
          color: "white",
          padding: "1rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2>My React App</h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: "white", textDecoration: "none" }}>
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Nội dung giới thiệu */}
      <main
        id="about"
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h1>Chào mừng bạn đến với ứng dụng React!</h1>
        <p>
          Đây là một ứng dụng React đơn giản được tạo bằng Vite và TypeScript,
          sau đó deploy lên Cloudflare Pages 🚀.
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          textAlign: "center",
          marginTop: "2rem",
          borderTop: "1px solid #ddd",
        }}
      >
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
