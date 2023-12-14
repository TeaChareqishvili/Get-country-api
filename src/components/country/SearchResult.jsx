import "./CountryStyle.scss";
import { NavLink } from "react-router-dom";


const SearchResult = ({night, result, handleGetRegion})=>{
    return (
       <>
       { result && result.map((item, index) => (
          <NavLink to="/region" key={index}>
            <div className={night ? "dark-region" : "light-region"} onClick={() => handleGetRegion(item)}>
              <img src={item.flags.png} alt="flag" />
              <h2 className={night ? "dark" : "light"}>{item.name.official}</h2>
              <p className={night ? "dark-font" : "light-font"}>
                Population:<span className={night ? "dark-span" : "light-span"}>{item.population}</span>
              </p>
              <p className={night ? "dark-font" : "light-font"}>
                Region:<span className={night ? "dark-span" : "light-span"}>{item.region}</span>
              </p>
              <p className={night ? "dark-font" : "light-font"}>
                Capital:<span className={night ? "dark-span" : "light-span"}>{item.capital}</span>
              </p>
            </div>
          </NavLink>
        ))}
       </>
    )
}

export {SearchResult}