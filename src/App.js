import Jatekter from "./components/Jatekter";
import "./App.css";
import {useState} from "react";

function App() {
  const [lista, setLista]=useState(["be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem"])
  const [allapot,setAllapot]=useState("ki-elem")
  function katt(index){
    console.log(index)
    
    const sl=[...lista]
    sl[index]=allapot
    let sa=allapot
    if(sa==="ki-elem"){
      setAllapot("be-elem")
      
    }else{
      setAllapot("ki-elem")
      
    }
    
    setLista([...sl])
    console.log(lista)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
    </div>
  );
}

export default App;
