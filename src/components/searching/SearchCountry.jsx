import "./SearchCountryStyle.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchCountry = ({result,setResult,handleClick}) => {
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
       setResult(results)
      }
    }
  };

 
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
   
  };


  return (
    <div className="main-wrapper-input">
      <div className="input-wrapper">
        <FaSearch className="icon-search" />
        <input
          type="text"
          placeholder="Search Country"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {result &&
        result.map((item, id) => (
          <div className="options" key={id}>
            <NavLink to="/region">  <p onClick={()=>handleClick(item)}>{item.name.official}</p></NavLink>
          
            {/* <div className="border"></div> */}
          </div>
        ))}
    </div>
  );
};

export { SearchCountry };
