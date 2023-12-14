import "./MainPage.scss";

import { CountryLayout } from "../countryLayout/CountryLayout";

const MainPage = ({
  night,
  handleGetRegion,
  result,
  setResult,
  clicked,
  setClicked,
  handleClick,
  chosenRegion,
  setChosenRegion,
}) => {
  return (
    <div className="wrapper">
      <CountryLayout
        night={night}
        handleGetRegion={handleGetRegion}
        result={result}
        setResult={setResult}
        clicked={clicked}
        setClicked={setClicked}
        handleClick={handleClick}
        chosenRegion={chosenRegion}
        setChosenRegion={setChosenRegion}
      />
    </div>
  );
};

export { MainPage };
