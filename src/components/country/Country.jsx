import "./CountryStyle.scss";
import { UseFetchData } from "../../hook/UseFetchData";
import { useState,useEffect } from "react";


const Country = ()=>{

    
    const [newdata, setNewData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedData = await UseFetchData();
          console.log("fetch", fetchedData);
  
          if (fetchedData && fetchedData.length > 0) {
            setNewData(fetchedData);
          } else {
            console.log("No data or empty array");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData(); 
    }, []);
  
    return (
      <div className="region-wrapper">
        {newdata.map((item, index) => (
          <div key={index} className="region">  
            <img src={item.flags.png} alt="flag"/>
            <h2>{item.name.official}</h2>
            <p>{item.population}</p>
            <p>{item.region}</p>
            <p>{item.capital}</p>
          </div>
        ))}
      </div>
    );
}

export {Country}