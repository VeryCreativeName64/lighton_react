import { createContext } from "react";
import {useState} from "react"
export const LightonContext = createContext("");

export const LightonProvider = ({children}) => {
  const [lista, setLista]=useState(["be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem", "be-elem"])
  const [allapot,setAllapot]=useState("ki-elem")
  function kattint(index){
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

  return <LightonContext.Provider value={{lista,allapot,kattint}}>
          {children}
      </LightonContext.Provider>;
}