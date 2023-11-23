import "./RegionDetailStyle.scss";
import { useParams } from "react-router-dom";


const RegionDetail =({night})=>{

    const { regionName } = useParams();

    console.log("region", regionName)

    return(
        <div className={night ? "region-wrapper-night" : "region-Wrapper-day"}>
            hello
        </div>
    )
}

export {RegionDetail}