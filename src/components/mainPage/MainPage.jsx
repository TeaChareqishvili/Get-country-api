import "./MainPage.scss";

import { CountryLayout } from "../countryLayout/CountryLayout";

const MainPage = ({ night, handleGetRegion,result,setResult }) => {
 

  return (
    <div className="wrapper">
      <CountryLayout  night={night}  handleGetRegion={handleGetRegion} result={result} setResult={setResult}/>
    </div>
  );
};

export { MainPage };
