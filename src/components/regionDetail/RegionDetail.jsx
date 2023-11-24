import "./RegionDetailStyle.scss";
import { NavLink } from "react-router-dom";


const RegionDetail = ({ night, region }) => {
  console.log("region-component-saved", region);



   

  return (
    <div className={night ? "region-wrapper-night" : "region-wrapper-day"}>
      <div className="button">
        <NavLink to="/">
          <button className="btn">Back</button>
        </NavLink>
      </div>
      <div className="regions">
        {region && (
          <>
            <div className="flags">
              <img src={region.flag} alt="flags" />
              <p>{region.area}</p>
            </div>
            <div className="region-info">
            
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { RegionDetail };
