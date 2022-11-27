import logo from "./aworklogo.svg";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            href="https://aworkconsulting.se/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </a>
        </header>

        <Dictionary defaultKeyword="summer" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
