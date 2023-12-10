import "./SearchCountryStyle.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchCountry = ({result,setResult}) => {
  const [input, setInput] = useState("");
const [clicked,setClicked] = useState([])

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

  const handleClick = (item) => {
    setClicked((prevClicked) => [...prevClicked, item]);
    const savedDataString = localStorage.getItem('myStore') || '[]';
    const savedData = JSON.parse(savedDataString);
    savedData.push(item);
    localStorage.setItem('myStore', JSON.stringify(savedData));
    // console.log(savedData, 'localclicked');
  };
  
//   console.log('clicked', clicked)

 

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
            <p onClick={()=>handleClick(item)}>{item.name.official}</p>
            {/* <div className="border"></div> */}
          </div>
        ))}
    </div>
  );
};

export { SearchCountry };
