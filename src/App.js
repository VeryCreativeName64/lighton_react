import Jatekter from "./components/Jatekter";
import "./App.css";
import { LightonContext } from "./contexts/LightonContext";
import {useContext} from "react"


function App() {
  const{lista}=useContext(LightonContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>
        <Jatekter  lista={lista}/>
      </article>
    </div>
  );
}

export default App;
