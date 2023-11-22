 import {UseFetchData} from "../../hook/UseFetchData";
import "./MainPage.scss";
import { Header } from "../header/Header";


const MainPage = ({night, setNight})=>{

    const data = UseFetchData()
     console.log('niaaa', data)

    return(
        <div className="main-wrapper">
         <Header night={night} setNight={setNight}/>
        </div>
    )
}

export {MainPage}

