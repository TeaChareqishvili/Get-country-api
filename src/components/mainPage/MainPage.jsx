import "./MainPage.scss";

import { CountryLayout } from "../countryLayout/CountryLayout";

const MainPage = ({ night }) => {
 

  return (
    <div className="wrapper">
      <CountryLayout  night={night} />
    </div>
  );
};

export { MainPage };
