import "./RegionDetailStyle.scss";
import { NavLink } from "react-router-dom";


const RegionDetail = ({ night, region,deleteLocalRegion }) => {
  console.log("region-component-saved", region);



   

  return (
    <div className={night ? "region-wrapper-night" : "region-wrapper-day"}>
      <div className="button">
        <NavLink to="/">
          <button className="btn" onClick={()=>deleteLocalRegion()}>Back</button>
        </NavLink>
      </div>
      <div className="regions">
     
      </div>
    </div>
  );
};

export { RegionDetail };
