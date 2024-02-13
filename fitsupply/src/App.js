import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FitSupply Coming Soon!</p>
        <p>To understand key concepts, I suggest you to:</p>
        <a
          className="App-link"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://mui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Material UI (Mui)
        </a>
        <a
          className="App-link"
          href="https://docs.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Netlify (For hosting / deployments)
        </a>
      </header>
    </div>
  );
}

export default App;
