import "./CountryStyle.scss";
import { UseFetchData } from "../../hook/UseFetchData";
import { useState,useEffect } from "react";


const Country = ({night})=>{

    
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
          <div key={index} className={night? "dark-region" :"light-region"}>  
            <img src={item.flags.png} alt="flag"/>
            <h2 className={night ? "dark" : "light"}>{item.name.official}</h2>
            <p className={night? "dark-font" : "light-font"}>Population:<span className={night ? "dark-span" : "light-span"}>{item.population}</span></p>
            <p className={night? "dark-font" : "light-font"}>Region:<span className={night ? "dark-span" : "light-span"}>{item.region}</span></p>
            <p className={night? "dark-font" : "light-font"}>Capital:<span className={night ? "dark-span" : "light-span"}>{item.capital}</span></p>
          </div>
        ))}
      </div>
    );
}

export {Country}