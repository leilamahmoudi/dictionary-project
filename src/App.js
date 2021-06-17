import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="orange" />
        </main>
        <footer className="App-footer">Coded by Leila Mahmoudi</footer>
      </div>
    </div>
  );
}
