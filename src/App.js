import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p className="header">English Dictionary </p>
        <a>
          <a href="https://www.instagram.com/leilaa.mahmoudi/">
            <i class="fab fa-3x fa-instagram-square"></i>
          </a>
          <a href="https://github.com/leilamahmoudi">
            <i class="fab fa-3x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/leila-mahmoudi-96a417202/">
            <i class="fab fa-3x fa-linkedin"></i>
          </a>
        </a>
      </div>
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">Coded by Leila Mahmoudi</footer>
      </div>
    </div>
  );
}
