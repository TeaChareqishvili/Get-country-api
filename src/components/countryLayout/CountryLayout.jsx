import { Country } from "../country/Country";
import { SearchCountry } from "../searching/SearchCountry";
import { SearchRegion } from "../searching/SearchRegion";
import "./CountryLayoutStyle.scss";

const CountryLayout = ({
  night,
  handleGetRegion,
  result,
  setResult,
  setClicked,
  handleClick,
  chosenRegion,
  setChosenRegion,
}) => {
  return (
    <div className={night ? "country-wrapper-night" : "country-wrapper"}>
      <form>
        <SearchCountry
          result={result}
          setResult={setResult}
          setClicked={setClicked}
          handleClick={handleClick}
          night={night}
        />
        <SearchRegion
          night={night}
          chosenRegion={chosenRegion}
          setChosenRegion={setChosenRegion}
        />
      </form>
      <Country
        night={night}
        handleGetRegion={handleGetRegion}
        result={result}
        chosenRegion={chosenRegion}
      />
    </div>
  );
};

export { CountryLayout };
