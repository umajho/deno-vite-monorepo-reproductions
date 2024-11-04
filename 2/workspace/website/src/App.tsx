import "./App.css";
// @ts-expect-error Unable to infer type at the moment
import solidLogo from "./assets/solid.svg";

import { Counter } from "@scope/counter";

function App() {
  return (
    <div class="App">
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <Counter />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  );
}

export default App;
