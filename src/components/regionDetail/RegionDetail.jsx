import { ClickedRegion } from "./ClickedRegion";
import "./RegionDetailStyle.scss";
import { NavLink } from "react-router-dom";
import { WholeRegion } from "./WholeRegion";

const RegionDetail = ({ night, region, deleteLocalRegion, clicked }) => {
  return (
    <div className={night ? "region-wrapper-night" : "region-wrapper-day"}>
      <div className="button">
        <NavLink to="/">
          <button className="btn" onClick={() => deleteLocalRegion()}>
            Back
          </button>
        </NavLink>
      </div>
      <div className="regions">
        {clicked.length > 0 ? (
          <ClickedRegion clicked={clicked} />
        ) : (
          <WholeRegion region={region} clicked={clicked} />
        )}
      </div>
    </div>
  );
};

export { RegionDetail };
