import { Link } from "react-router-dom"
import {Toggle} from './toggle'
import {ToggleContext} from "./context/toggleContext"
import { useContext } from "react"
export const Navbar =()=>{
    const nav = [
        {title: "Stop Watch",to:"/"},
        {title:"Timer", to:"/timer"},
        
    ]
    const {toggle} = useContext(ToggleContext);
    return(
        <div className="flex">
            <div>
            {nav.map((e,i)=>(
                <Link key={i} to={e.to} className={toggle? "Darklink" : "link"}>{e.title}</Link>
            ))}
            </div>
            <div>
                <Toggle/>
            </div>
        </div>
    )
}