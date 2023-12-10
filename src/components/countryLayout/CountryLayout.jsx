import { Country } from "../country/Country";
import { SearchCountry } from "../searching/SearchCountry";
import "./CountryLayoutStyle.scss";


const CountryLayout = ({ night, handleGetRegion }) => {
  // const [input, setInput] = useState("");

  // const fetchData = (value) => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((country) => {
  //         return (
  //           value &&
  //           country &&
  //           country.name.official &&
  //           country.name.official.toLowerCase().includes(value)
  //         );
  //       });
  //       console.log("result", results);
  //     });
  // };

  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };

  return (
    <div className={night ? "country-wrapper-night" : "country-wrapper"}>
     <form>
     <SearchCountry/>
     </form>
     
      
      <Country night={night} handleGetRegion={handleGetRegion} />
    </div>
  );
};

export { CountryLayout };
