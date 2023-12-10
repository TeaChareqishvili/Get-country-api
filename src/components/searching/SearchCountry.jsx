import "./SearchCountryStyle.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";


const SearchCountry = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const storedData = localStorage.getItem("countriesData");

    if (storedData) {
      const jsonDataRetrieved = JSON.parse(storedData);

      if (Array.isArray(jsonDataRetrieved)) {
        const results = jsonDataRetrieved.filter((country) => {
          return (
            value &&
            country &&
            country.name &&
            country.name.official &&
            typeof country.name.official === "string" &&
            country.name.official.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log("result", results);
      }
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch className="icon-search" />
        <input
          type="text"
          placeholder="Search Country"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export { SearchCountry };
