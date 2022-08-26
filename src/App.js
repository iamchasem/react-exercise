import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learning React</h1>
        <p>
          React is an open-source JavaScript library for building user
          interfaces based on UI components.
        </p>
        <p>React is so cool!</p>
        <p>Why learn react?</p>
        <ul>
          <li>React is free and open source</li>
          <li>
            React is one of the most popular and in-demand (if not <em>the</em>{" "}
            most) front-end JavaScript libraries
          </li>
          <li>
            React is well supported with many open source npm packages dedicated
            to making React projects as far reaching as possible
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
