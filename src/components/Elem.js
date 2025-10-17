import React from 'react'

export default function Elem(props) {

    function katt(){
        
        props.katt(props.index)
    }

    

  return (
    <div className={props.adat} onClick={katt}>
        
    </div>
  )
}
