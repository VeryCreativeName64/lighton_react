
import {useContext} from "react"
import { LightonContext } from '../contexts/LightonContext'

export default function Elem(props) {
    const {kattint}=useContext(LightonContext)
    function katt(){
        kattint(props.index)
    }

    

  return (
    <div className={props.adat} onClick={katt}>
        
    </div>
  )
}
