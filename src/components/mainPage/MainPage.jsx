import "./MainPage.scss";

import { CountryLayout } from "../countryLayout/CountryLayout";

const MainPage = ({ night, handleGetRegion }) => {
 

  return (
    <div className="wrapper">
      <CountryLayout  night={night}  handleGetRegion={handleGetRegion}/>
    </div>
  );
};

export { MainPage };
