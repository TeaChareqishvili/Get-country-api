import { Country } from "../country/Country";
import "./CountryLayoutStyle.scss";

const CountryLayout = ({night, handleGetRegion}) => {
  return (
    <div className={night? "country-wrapper-night" : "country-wrapper"}>    
      <form>
        <p>search</p>
        <p>filter</p>
      </form>
     <Country night={night} handleGetRegion={handleGetRegion}/>
    </div>
  );
};

export { CountryLayout };
