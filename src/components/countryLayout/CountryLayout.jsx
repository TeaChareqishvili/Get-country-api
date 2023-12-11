import { Country } from "../country/Country";
import { SearchCountry } from "../searching/SearchCountry";
import "./CountryLayoutStyle.scss";

const CountryLayout = ({ night, handleGetRegion,result,setResult,clicked, setClicked,handleClick}) => {


  return (
    <div className={night ? "country-wrapper-night" : "country-wrapper"}>
      <form>
        <SearchCountry  result={result} setResult={setResult} setClicked={setClicked} handleClick={handleClick} />
      </form>
      <Country night={night} handleGetRegion={handleGetRegion} result={result}  />
    </div>
  );
};

export { CountryLayout };
