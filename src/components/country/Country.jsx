import "./CountryStyle.scss";
import { UseFetchData } from "../../hook/UseFetchData";


const Country = ()=>{

    const data = UseFetchData()

    console.log("fetch", data);

data.then(data => {
    if (data && data.length > 0) {
      // Extract and log the "borders" property for each item in the array
      data.map((item, index) => (
        console.log(`Borders for item `, item.flag)
      ));
    } else {
      console.log("No data or empty array");
    }
  }).catch(error => {
    console.error("Error fetching data:", error);
  });

    


    return(
        <div>
        
        </div>
    )
}

export {Country}