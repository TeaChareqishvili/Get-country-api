 import {UseFetchData} from "../../hook/UseFetchData";
import "./MainPage.scss";
import { Header } from "../header/Header";


const MainPage = ({night, setNight, ChangeMode})=>{

    const data = UseFetchData()
     console.log('niaaa', data)

    return(
        <div className={night ? "night-mode" : "main-wrapper"}>
         <Header night={night} setNight={setNight} ChangeMode={ChangeMode}/>
        </div>
    )
}

export {MainPage}

