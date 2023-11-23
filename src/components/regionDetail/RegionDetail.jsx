import "./RegionDetailStyle.scss";
import { NavLink } from "react-router-dom";


const RegionDetail = ({ night,region }) => {
//   const { regionName } = useParams();

//   console.log("regions", regionName);
//   const population = regionName.match(/\d+/)[0]; // Extracts the digits
//   const country = regionName.replace(/\d+/g, "");
//   const languages =regionName.match(/[a-zA-Z]+/g);

console.log("region-component", region)
  return (
    <div className={night ? "region-wrapper-night" : "region-wrapper-day"}>
      <div className="button">
        <NavLink to="/">
          <button className="btn">Back</button>
        </NavLink>
      
      </div>
    </div>
  );
};

export { RegionDetail };
