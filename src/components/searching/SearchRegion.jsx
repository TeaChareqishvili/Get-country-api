import "./SearchRegionStyle.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchRegion = ({ night, chosenRegion,setChosenRegion}) => {
  const [region, setRegion] = useState("");

  const fetchData = (value) => {
    const storedData = localStorage.getItem("countriesData");

    if (storedData) {
      const jsonDataRetrieved = JSON.parse(storedData);

      if (Array.isArray(jsonDataRetrieved)) {
        const results = jsonDataRetrieved.filter((country) => {
          return (
            value &&
            country &&
            country.region &&
            typeof country.region === "string" &&
            country.region.toLowerCase().includes(value.toLowerCase())
          );
        });
          setChosenRegion(results)
      }
    }
  };

  const handleChoose = (value) => {
    setRegion(value);
    fetchData(value);
  };

  return (
    <div
      className={
        night ? "search-region-wrapper-night" : "search-region-wrapper-day"
      }
    >
      <div className="input-wrapper">
        <FaSearch className="icon-search" />
        <input
          type="text"
          placeholder="Search Region..."
          value={region}
          onChange={(e) => handleChoose(e.target.value)}
        />   
      </div>
    </div>
  );
};

export { SearchRegion };
