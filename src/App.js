import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p className="header">English Dictionary </p>
        <p>
          <a href="https://www.instagram.com/leilaa.mahmoudi/">
            <i class="fab fa-3x fa-instagram-square"></i>
          </a>
          <a href="https://github.com/leilamahmoudi">
            <i class="fab fa-3x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/leila-mahmoudi-96a417202/">
            <i class="fab fa-3x fa-linkedin"></i>
          </a>
        </p>
      </div>
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/leila-mahmoudi-96a417202/">
            leila mahmoudi
          </a>{" "}
          is open-sourced on
          <a href="https://github.com/leilamahmoudi/dictionary-project">
            {" "}
            GitHub
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
