import "./RegionDetailStyle.scss";
import { NavLink } from "react-router-dom";

const RegionDetail = ({ night, region, deleteLocalRegion, clicked}) => {
  console.log("region-component-saved", clicked);

 

  const selectedCurrencyCode = clicked.length > 0 ? Object.keys(clicked[0].currencies)[0] : null;
  const selectAvailableLanguage = clicked.length > 0 ? Object.keys(clicked[0].languages)[0] : null;

  const selectedCurrency = clicked.length > 0 ? Object.keys(clicked[0].currencies)[0] : null;
  const selectAvailableLang = clicked.length > 0 ? Object.keys(clicked[0].languages)[0] : null;

  

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
        {clicked.length>0 ? (clicked.map((item, id) => (
          <div key={id} className="region">
            <div className="flags">
              <img src={item.flags.svg} alt="flag" />
            </div>
            <div className="region-info">
              <p className="official">{item.name.official}</p>

              <div className="titles">
                <p>Capital: <span className="info">{item.capital}</span></p>
                <p>Region: <span className="info">{item.region}</span></p>
                <p>Population: <span className="info">{item.population}</span></p>
                <p>Area: <span className="info">{item.area}</span></p>
                <p>Continents: <span className="info">{item.continents}</span></p>
              </div>
              <div className="titles">
                <p>Currencies: <span className="info">{item.currencies[selectedCurrency]?.name}</span></p>
                <p>Symbol: <span className="info">{item.currencies[selectedCurrency]?.symbol}</span> </p>
                <p>Independent: <span className="info">{String(item.independent)}</span></p>
                <p>Languages: <span className="info">{item.languages[selectAvailableLang]}</span></p>
                <p>
                  Maps:{" "}
                  <a href={item.maps.googleMaps}>{item.maps.googleMaps}</a>
                </p>
              </div>
            </div>
          </div>
        ))) : (region.map((item, id) => (
          <div key={id} className="region">
            <div className="flags">
              <img src={item.flags.svg} alt="flag" />
            </div>
            <div className="region-info">
              <p className="official">{item.name.official}</p>

              <div className="titles">
                <p>Capital: <span className="info">{item.capital}</span></p>
                <p>Region: <span className="info">{item.region}</span></p>
                <p>Population: <span className="info">{item.population}</span></p>
                <p>Area: <span className="info">{item.area}</span></p>
                <p>Continents: <span className="info">{item.continents}</span></p>
              </div>
              <div className="titles">
                <p>Currencies: <span className="info">{item.currencies[selectedCurrencyCode]?.name}</span></p>
                <p>Symbol: <span className="info">{item.currencies[selectedCurrencyCode]?.symbol}</span> </p>
                <p>Independent: <span className="info">{String(item.independent)}</span></p>
                <p>Languages: <span className="info">{item.languages[selectAvailableLanguage]}</span></p>
                <p>
                  Maps:{" "}
                  <a href={item.maps.googleMaps}>{item.maps.googleMaps}</a>
                </p>
              </div>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export { RegionDetail };
