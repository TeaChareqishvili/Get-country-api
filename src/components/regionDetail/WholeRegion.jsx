import "./RegionDetailStyle.scss";

const WholeRegion = ({region,clicked}) => {

    const selectedCurrencyCode = clicked.length > 0 ? Object.keys(clicked[0].currencies)[0] : null;
    const selectAvailableLanguage = clicked.length > 0 ? Object.keys(clicked[0].languages)[0] : null;

  return (
    <>
      {region.map((item, id) => (
        <div key={id} className="region">
          <div className="flags">
            <img src={item.flags.svg} alt="flag" />
          </div>
          <div className="region-info">
            <p className="official">{item.name.official}</p>

            <div className="titles">
              <p>
                Capital: <span className="info">{item.capital}</span>
              </p>
              <p>
                Region: <span className="info">{item.region}</span>
              </p>
              <p>
                Population: <span className="info">{item.population}</span>
              </p>
              <p>
                Area: <span className="info">{item.area}</span>
              </p>
              <p>
                Continents: <span className="info">{item.continents}</span>
              </p>
            </div>
            <div className="titles">
              <p>
                Currencies:{" "}
                <span className="info">
                  {item.currencies[selectedCurrencyCode]?.name}
                </span>
              </p>
              <p>
                Symbol:{" "}
                <span className="info">
                  {item.currencies[selectedCurrencyCode]?.symbol}
                </span>{" "}
              </p>
              <p>
                Independent:{" "}
                <span className="info">{String(item.independent)}</span>
              </p>
              <p>
                Languages:{" "}
                <span className="info">
                  {item.languages[selectAvailableLanguage]}
                </span>
              </p>
              <p>
                Maps: <a href={item.maps.googleMaps}>{item.maps.googleMaps}</a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { WholeRegion };
