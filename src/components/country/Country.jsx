import "./CountryStyle.scss";
import { SearchResult } from "./SearchResult";
import { SearchRegion } from "./SearchRegion";
import { AllCountryData } from "./AllCountryData";

const Country = ({ night, handleGetRegion, result, chosenRegion }) => {

  

  return (
    <div className="region-wrapper">
      {result.length > 0 ? (
        <SearchResult
          night={night}
          result={result}
          handleGetRegion={handleGetRegion}
        />
      ) : chosenRegion.length > 0 ? (
        <SearchRegion
          night={night}
          chosenRegion={chosenRegion}
          handleGetRegion={handleGetRegion}
        />
      ) : (
       <AllCountryData night={night} handleGetRegion={handleGetRegion} />
      )}
    </div>
  );
};

export { Country };
