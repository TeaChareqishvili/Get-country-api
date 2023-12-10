import { Country } from "../country/Country";
import { SearchCountry } from "../searching/SearchCountry";
import "./CountryLayoutStyle.scss";

const CountryLayout = ({ night, handleGetRegion,result,setResult}) => {


  return (
    <div className={night ? "country-wrapper-night" : "country-wrapper"}>
      <form>
        <SearchCountry  result={result} setResult={setResult} />
      </form>
      <Country night={night} handleGetRegion={handleGetRegion} result={result}  />
    </div>
  );
};

export { CountryLayout };
