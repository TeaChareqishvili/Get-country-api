import "./HeaderStyle.scss";
import { IoMoonOutline } from "react-icons/io5";



const Header = ({night, setNight})=>{

    const ChangeMode = ()=>{
        setNight(!night)
    }

    return(
        <div className={ night ? "night-mode" :"where-in-world"}>
        <h2>Where In The World?</h2>
        <div className="mode" onClick={()=>ChangeMode()}>
        <IoMoonOutline />
        <p>Dark Mode</p>
        </div>
        </div>
    )
}

export {Header}

