import "./CountryStyle.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { UseFetchData } from "../../hook/UseFetchData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllCountryData = ({ night, handleGetRegion }) => {
  const [newdata, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await UseFetchData();
        if (fetchedData && fetchedData.length > 0) {
          setNewData(fetchedData);
        } else {
        }
      } catch (error) {}
    };

    fetchData();
  }, []);
  console.log(newdata, "newdata");
  return (
    <>
      {newdata.length > 0 ? (
        newdata.map((item, index) => (
          <NavLink to="/region" key={index}>
            <div
              className={night ? "dark-region" : "light-region"}
              onClick={() => handleGetRegion(item)}
            >
              <img src={item.flags.png} alt="flag" />
              <h2 className={night ? "dark" : "light"}>{item.name.official}</h2>
              <p className={night ? "dark-font" : "light-font"}>
                Population:
                <span className={night ? "dark-span" : "light-span"}>
                  {item.population}
                </span>
              </p>
              <p className={night ? "dark-font" : "light-font"}>
                Region:
                <span className={night ? "dark-span" : "light-span"}>
                  {item.region}
                </span>
              </p>
              <p className={night ? "dark-font" : "light-font"}>
                Capital:
                <span className={night ? "dark-span" : "light-span"}>
                  {item.capital}
                </span>
              </p>
            </div>
          </NavLink>
        ))
      ) : (
        <Skeleton count={8} height={150} />
      )}
    </>
  );
};

export { AllCountryData };
