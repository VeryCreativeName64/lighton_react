import React from "react";
import Elem from "./Elem";
import './jatekter.css'

export default function Jatekter(props) {

  return (
    <>
    <h2>Játéktér</h2>
    <div className="jatekter">
    {
        props.lista.map( (adat,index)=>{

            return (
                <Elem adat={adat} key={index} katt={props.katt} index={index}/>
            )
        }
        )
    }    
      
      

    </div>
    </>
  );
}
