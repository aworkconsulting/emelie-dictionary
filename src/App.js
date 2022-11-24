import logo from "./aworklogo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>Coded by Emelie</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
